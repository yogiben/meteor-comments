Package.describe({
  summary: "Adds comments to your collection(s) of choice",
  version: "0.0.6",
  git: "http://github.com/yogiben/meteor-comments.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

	    'aldeed:autoform@3.2.0',
      'yogiben:user-helpers@0.0.1'

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
      'lib/client/helpers.coffee',
  		'lib/client/autoform.coffee'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.coffee',
  		'lib/server/publish.coffee'
  	],
  	'server')



});
