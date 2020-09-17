#!/bin/sh
export REGISTRY=dev.binaural.com.ve:5050
export PROJECT=/binaural/proyectos/frontend/spa/angular/amblema-front

docker login ${REGISTRY} -u joseaguerrero -p password

docker pull ${REGISTRY}${PROJECT}/app:latest

docker rm -f amblema-front-app

docker run -d --name amblema-front-app -p 10514:80 ${REGISTRY}${PROJECT}/app

docker pull ${REGISTRY}${PROJECT}/ssr:latest

docker rm -f amblema-front-ssr

docker run -d --name amblema-front-ssr -p 10516:4200 ${REGISTRY}${PROJECT}/ssr
