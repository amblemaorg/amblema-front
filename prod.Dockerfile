# Development stage
FROM node:12-alpine AS dev

RUN node -v && npm -v

WORKDIR /home/amblema

ENV PATH /home/amblema/node_modules/.bin:$PATH

COPY ./package.json ./

# COPY ./package-lock.json ./

# RUN apk update && apk upgrade && \
#   apk add --no-cache bash curl

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh curl


RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
  chmod +x envsubst && \
  mv envsubst /usr/local/bin

RUN npm install

CMD ["npm", "start"]

# Build stage
FROM dev AS build

COPY ./ ./

ARG G_MAPS_ID
ARG G_ANALYTICS_ID

ENV G_MAPS_ID=${G_MAPS_ID}
ENV G_ANALYTICS_ID=${G_ANALYTICS_ID}

# RUN /bin/sh -c "envsubst '$G_MAPS_ID$G_ANALYTICS_ID' < src/index.template.html > src/index.html"
# RUN /bin/sh -c "envsubst '$$G_MAPS_ID$$G_ANALYTICS_ID' < /home/amblema/src/index.template.html > /home/amblema/src/index.html"

RUN npm run build:prod

# Production App Client Site Render stage
FROM nginx:1.19-alpine AS csr-prod

ARG NGINX_HOST
ARG NGINX_PORT
ARG NGINX_ROOT
ARG SSR_HOST
ARG SSR_PORT

ENV NGINX_HOST=${NGINX_HOST}
ENV NGINX_PORT=${NGINX_PORT}
ENV NGINX_ROOT=${NGINX_ROOT}
ENV SSR_HOST=${SSR_HOST}
ENV SSR_PORT=${SSR_PORT}

RUN apk --no-cache add curl

RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
  chmod +x envsubst && \
  mv envsubst /usr/local/bin

COPY --from=build /home/amblema/dist/browser /home/amblema/dist/browser

COPY ./vhost-template.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# RUN /bin/sh -c "envsubst '$NGINX_HOST$NGINX_PORT$NGINX_ROOT$SSR_HOST$SSR_PORT' < nginx-site.template.conf > /etc/nginx/conf.d/default.conf"

RUN cat /etc/nginx/conf.d/default.conf

# command is used from the base NGINX image
