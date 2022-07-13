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

# Update Packages Conflicts

On Local:

- [ ] "@nebular/auth": "^6.2.2" **=>** `7.0.5` {Conflicto con Version de Angular},
- [ ] "@nebular/eva-icons": "^6.2.2" **=>** `9.0.1` {Conflicto con Version de Angular},
- [ ] "@nebular/theme": "^6.2.2" **=>** `9.0.1` {Conflicto con Version de Angular},
- [ ] "angular-svg-icon": "^12.0.0" **=>** `13.0.0` {Conflicto con Version de Angular},
- [ ] "ng-recaptcha": "^8.0.1" **=>** `9.0.0` {Conflicto con sintaxis de ts al no tener export default},
- [ ] "ng2-charts": "^2.4.3" **=>** `3.0.8` {Conflicto con sintaxis de ts al no tener export default},
- [ ] "xlsx": "^0.17.4" **=>** `0.18.3` {Conflicto con sintaxis de ts al no tener export default},

No:
"ng2-charts": "^2.4.3" => 3.0.11
"ngx-image-compress": "^11.0.3" => 13.1.13
"rxjs": "^6.6.7" => 7.5.5

Yes:

- cldr-data =36.0.1
- bootstrap.native@4.2.0
- express@4.18.1
- pdfmake@0.2.5
- pdfmake-wrapper@2.1.3
- tslib@2.4.0
- xlsx@0.17.5
- zone.js@0.11.6

- @types/jasminewd2@2.0.10
- @types/express@4.17.13
- @types/file-saver@2.0.5
- @types/google.maps@3.49.2
- @ngxs/storage-plugin@3.7.4
- @types/node@14.18.21
- @ngxs/store@3.7.4
- @syncfusion/ej2-angular-schedule@19.4.55
- karma-jasmine-html-reporter@1.7.0
- codelyzer@5.2.2
