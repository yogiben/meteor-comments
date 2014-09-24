Package.describe({
  summary: "Adds favoriting/liking functionality",
  version: "0.0.2",
  git: "http://github.com/yogiben/meteor-favorites.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

	    'aldeed:collection2@0.4.6'

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/schemas.coffee',
  		'lib/both/collections.coffee'
  	],
  	both)

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.coffee',
  		'lib/client/helpers.coffee'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.coffee',
  		'lib/server/publish.coffee'
  	],
  	'server')



});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yogiben:favorites');
  api.addFiles('yogiben:favorites-tests.js');
});
