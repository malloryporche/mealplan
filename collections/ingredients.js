Ingredients = new Mongo.Collection('ingredients');


Ingredients.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

IngredientsListSchema = new SimpleSchema({
	offset: {
		type: String
	},
	name: {
		type: String
	},
	group: {
		type: String
	},
	ds: {
		type: String
	},
	ndbno: {
		type: String
	}
});

IngredientsSchema = new SimpleSchema({
	name: {
		type: String
	},
	list: {
		type: [IngredientsListSchema]
	}
});

Meteor.methods({
	ingredientsCache: function(ingredient) {
		// get data from db
		var data = Ingredients.find({name: ingredient}).fetch();
		console.log(IngredientsSearchResults.find({name: ingredient}).fetch());

		return data;
	}
});


Ingredients.attachSchema( IngredientsSchema );
