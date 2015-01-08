Package.describe({
  name: 'asveloper:ui-loader',
  summary: 'Meteor Package to load bootstrap and ratchet frontend framework for web and cordova respectively.',
  version: '1.0.1',
  git: 'https://github.com/asveloper/ui-loader.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  
  api.use('bootstrap@1.0.1', 'web.browser');
  api.use('pcjpcj2:ratchet@2.0.2', 'web.cordova');
  
  api.addFiles('asveloper:ui-loader.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('asveloper:ui-loader');
  api.addFiles('asveloper:ui-loader-tests.js');
});
