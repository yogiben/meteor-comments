Package.describe({
  summary: "Adds comments to your collection(s) of choice",
  version: "0.0.8",
  git: "http://github.com/yogiben/meteor-comments.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

	    'aldeed:autoform@4.0.2',
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
