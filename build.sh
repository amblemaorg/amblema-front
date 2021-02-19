#!/bin/bash
export REGISTRY=gitlab.binauraldev.com:5050

export PROJECT=/binaural/proyectos/frontend/spa/angular/amblema-front

# You MUST create .env.prod to add environment variables needed to create the images successfully
# .env.prod file variables provided MUST be like :
#
# export NGINX_HOST=127.0.0.1
# export NGINX_PORT=80
# export NGINX_ROOT=/usr/share/nginx/html
# export SSR_HOST=
# export SSR_PORT=
# export G_MAPS_ID=
# export G_ANALYTICS_ID=
source .env.prod

docker login ${REGISTRY} -u serh -p VqvYjUD6h88Yask4aZtV

docker build \
  -f prod.Dockerfile \
  --build-arg G_MAPS_ID \
  --build-arg G_ANALYTICS_ID \
  --build-arg NGINX_HOST \
  --build-arg NGINX_PORT \
  --build-arg NGINX_ROOT \
  --build-arg SSR_HOST \
  --build-arg SSR_PORT \
  --target csr-prod \
  -t ${REGISTRY}${PROJECT}/app .

docker push ${REGISTRY}${PROJECT}/app

docker rmi ${REGISTRY}${PROJECT}/app

docker build \
  -f prod.Dockerfile \
  --build-arg G_MAPS_ID \
  --build-arg G_ANALYTICS_ID \
  --build-arg NGINX_HOST \
  --build-arg NGINX_PORT \
  --build-arg NGINX_ROOT \
  --build-arg SSR_HOST \
  --build-arg SSR_PORT \
  --target ssr-prod \
  -t ${REGISTRY}${PROJECT}/ssr .

docker push ${REGISTRY}${PROJECT}/ssr

docker rmi ${REGISTRY}${PROJECT}/ssr
