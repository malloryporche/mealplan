IngredientsSearchResults = new Mongo.Collection('ingredientsSearchResults');


IngredientsSearchResults.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});



IngredientsSearchResultsItemSchema = new SimpleSchema({
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


IngredientsSearchResultsSchema = new SimpleSchema({
	name: {
		type: String
	},
	list: {
		type: [IngredientsSearchResultsItemSchema]
	}
});


// Meteor.methods({
// 	ingredientsCache: function(ingredient) {
// 		// get data from db
// 		var data = Ingredients.find({name: ingredient}).fetch();

// 		return data;
// 	}
// });


IngredientsSearchResults.attachSchema( IngredientsSearchResultsSchema );
// IngredientSearchResultsItem.attachSchema( IngredientsSearchResultsItemSchema );