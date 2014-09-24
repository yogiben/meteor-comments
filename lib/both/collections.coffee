@Comments = new Meteor.Collection 'comments'

Schemas.Comments = new SimpleSchema
	doc:
		type:String
		regEx: SimpleSchema.RegEx.Id

	owner:
		type: String
		regEx: SimpleSchema.RegEx.Id

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	content:
		type: String
		label: 'Content'

Comments.attachSchema(Schemas.Comments)