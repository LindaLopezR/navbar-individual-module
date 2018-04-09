Package.describe({
  name: 'igoandsee:navbar-individual-module',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('blaze-html-templates@1.0.4');
  api.use('ecmascript');
  api.use('templating');
  api.use('tap:i18n@1.8.2');
  api.use('igoandsee:notifications-collection');
  api.mainModule('navbar-individual-module.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('navbar-individual-module');
  api.mainModule('navbar-individual-module-tests.js');
});
