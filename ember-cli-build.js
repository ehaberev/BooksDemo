'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const  funnel = require ('broccoli-funnel');
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {   

    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapCSS': false
    }
  });
  app.import('vendor/tagsinput.css');

  app.import('vendor/jquery.flexberry.downloadFile.js');
  app.import('vendor/jquery.blobajaxtransport.js');
  
  const css= funnel('node_modules/bootstrap/dist/css',{
    include:['*.min.css'],
    destDir:'bootstrap/css',
  })
  const js= funnel('node_modules/bootstrap/dist/js',{
    include:['*.js'],
    destDir:'bootstrap/js',
  })
  const jsFiles = funnel('vendor', {
    files: ['popper.min.js', 'tagsinput.js', 'jquery-ui.js'],
    destDir: 'js'
  });

  const jqueryFiles = funnel('node_modules/blueimp-file-upload/js', {
    files: ['**/*.js'],
    destDir: 'js'
  });
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([css,js,jsFiles,jqueryFiles]);
};
