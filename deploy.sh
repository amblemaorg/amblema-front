# #!/bin/sh
# export REGISTRY=gitlab.binauraldev.com:5050
# export PROJECT=/binaural/proyectos/frontend/spa/angular/amblema-front
# export TOKEN=4Pm291_ryF2XyRA_Q3fD

# echo "${TOKEN}" | docker login ${REGISTRY} -u serh --password-stdin

# docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/24 amblema-network

# docker pull ${REGISTRY}${PROJECT}/app:latest

# docker rm -f amblema-front-app

# docker run -d --name amblema-front-app -p 10514:80 ${REGISTRY}${PROJECT}/app

# docker network connect --alias amblema-front-app --ip 172.20.240.1 amblema-network amblema-front-app

# docker pull ${REGISTRY}${PROJECT}/ssr:latest

# docker rm -f amblema-front-ssr

# docker run -d --name amblema-front-ssr -p 10516:4200 ${REGISTRY}${PROJECT}/ssr

# docker network connect --alias amblema-front-ssr --ip 172.20.240.2 amblema-network amblema-front-ssr

# docker logout ${REGISTRY}

#!/bin/bash
export REPOSITORY=devbinaural/build_amblema-front
export USER=devbinaural
export TOKEN=Garden.86

echo "${TOKEN}" | docker login -u ${USER} --password-stdin

docker network create --subnet 172.20.0.0/16 --ip-range 172.20.240.0/24 amblema-network

docker pull ${REPOSITORY}-app:latest

docker rm -f amblema-front-app

docker run -d --name amblema-front-app -p 10514:80 ${REPOSITORY}-app

docker network connect --alias amblema-front-app --ip 172.20.240.1 amblema-network amblema-front-app

docker pull ${REPOSITORY}-ssr:latest

docker rm -f amblema-front-ssr

docker run -d --name amblema-front-ssr -p 10516:4200 ${REPOSITORY}-ssr

docker network connect --alias amblema-front-ssr --ip 172.20.240.2 amblema-network amblema-front-ssr

docker logout
