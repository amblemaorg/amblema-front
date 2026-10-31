// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  recaptchaKey: '6LdGCLYrAAAAAH9-r2S9OXr6iXEXczuAJ5wZ5o45', // from cuentas.soporte@binaural.com.ve
  recaptchaNonce: '0D3VrhyLft',
  baseUrl: 'http://localhost:10505/',
  // Clave pública (restringida por dominio en Google Cloud); el script se carga con GoogleMapsLoaderService
  googleMapsKey: 'AIzaSyDTvLC-NQx9mMn4rpC0yQOjjLUmm3_uowI',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
