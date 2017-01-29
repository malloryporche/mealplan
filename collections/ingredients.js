Ingredients = new Mongo.Collection('ingredients');


Ingredients.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

IngredientsSchema = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	},
	list: {
		type: Object
	}
});

Meteor.methods({
	ingredientsCache: function(ingredient) {
		// get data from db
		var data = Ingredients.find({name: ingredient}).fetch();

		return { data };
	}
});


Ingredients.attachSchema( IngredientsSchema );
