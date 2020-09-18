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
    export SSR_HOST=
    export SSR_PORT=
    export G_MAPS_ID=
    export G_ANALYTICS_ID=
  ```

3. Agregar credenciales de un usuario gitlab en el comando `docker login` en el archivo `build.sh` para poder subir imagenes al container registry del repositorio

4. Ejecutar el script `build.sh`

  NOTA: Los pasos 2, 3 se pueden reimplementar a través de variables de CI/CD y un pipeline

### Deploy

1. Agregar credenciales de un usuario gitlab en el comando `docker login` en el archivo `build.sh` para poder subir imagenes al container registry del repositorio

2. Ejecutar el script `deploy.sh` en el servidor para recrear los contenedores

