AutoForm.hooks commentForm:
  onSuccess: (operation, result, template) ->
  	console.log result
  	
  onError: (operation, error, template) ->
  	alert error

  formToDoc: (doc, ss, formId) ->
  	doc.doc = Template.instance().data.commentDocId
  	doc.owner = Meteor.userId()
  	doc