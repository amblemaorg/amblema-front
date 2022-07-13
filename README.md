# AmbLeMa Web

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 8.3.25.

## Despliegue a producción

### Build docker images

1. Verificar que las variables en el archivo `src/environments/environmets.prod.ts` son las correctas para producción

2. Crear archivo .env.prod con el siguiente contenido para la creación de variables de entorno en el build

```
  export NGINX_HOST=127.0.0.1
  export NGINX_PORT=80
  export NGINX_ROOT=/usr/share/nginx/html
  export SSR_HOST=172.20.240.2
  export SSR_PORT=4200
  export G_MAPS_ID=
  export G_ANALYTICS_ID=
```

Agregar los ID para el acceso a los servicios de google maps y google analytics, en las variables G_MAPS_ID y G_ANALYTICS_ID respectivamente

Verificar que las variables NGINX_PORT y SSR_PORT coinciden con las expuesta en el `prod.Dockerfile` y el puerto mapeado en los comando `docker run` para amblema-front-app y amblema-front-ssr en el `deploy.sh`

Verificar que la variable SSR_HOST coincide con la IP asignada en el comando `docker network connect` para el contenedor amblema-front-ssr

3. Agregar credenciales de un usuario gitlab en el comando `docker login` en el archivo `build.sh` para poder subir imagenes al container registry del repositorio

4. Ejecutar el script `build.sh`

NOTA: Los pasos 2, 3 se pueden reimplementar a través de variables de CI/CD y un pipeline

### Deploy

1. Agregar credenciales de un usuario gitlab en el comando `docker login` en el archivo `deploy.sh` para poder subir imagenes al container registry del repositorio

2. Verificar en el `deploy.sh` que el puerto mapeado en los comando `docker run` para amblema-front-app y amblema-front-ssr coinciden con las variables NGINX_PORT y SSR_PORT usadas durante el build de la imagen

3. Verificar en el `deploy.sh` que la IP asignada en el comando `docker network connect` para el contenedor amblema-front-ssr coincide con la variable SSR_HOST usada en el build de la imagen

4. Ejecutar el script `deploy.sh` en el servidor para recrear los contenedores
