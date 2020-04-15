// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const __karma__: any;
declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const tags = __karma__.config.args[0];
const filterRegExp = (tags) ? new RegExp(tags, 'g') : /\.spec\.ts$/;
const context = require.context('./', true, /\.spec\.ts$/);
const specFiles = context.keys().filter(path => filterRegExp.test(path));
// And load the modules.
specFiles.map(context);
