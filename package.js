Package.describe({
  name: 'asveloper:ui-loader',
  summary: 'Package to load bootstrap frontend framework for web and ratchet frontend framework for cordova.',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  
  api.use('bootstrap', 'web.browser');
  api.use('pcjpcj2:ratchet', 'web.cordova');
  
  api.addFiles('asveloper:ui-loader.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('asveloper:ui-loader');
  api.addFiles('asveloper:ui-loader-tests.js');
});
