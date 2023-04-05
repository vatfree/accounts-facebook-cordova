Package.describe({
  summary: "Login service for Facebook (2.4) accounts (works with cordova)",
  version: "0.0.11",
  git: "https://github.com/vatfree/accounts-facebook-cordova.git",
  author: "Santiago Rojas",
  name: "vatfree:accounts-facebook-cordova",
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('facebook-oauth', ['client', 'server']);

  api.use('service-configuration', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');

  api.addFiles('facebook_server.js', 'server');
  api.addFiles("facebook.js");
});
