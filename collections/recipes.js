Recipes = new Mongo.Collection('recipes');


Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredients]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
			},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
			},
			autoform: {
				type: "hidden"
			}
		},
	isFavorite: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},

});

Meteor.methods({
	toggleMenuItem: function(id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	toggleFavorite: function(id, isFavorite) {
		Recipes.update(id, {
			$set: {
				isFavorite: !isFavorite
			}
		});
	},
	deleteRecipe: function(id) {
		Recipes.remove(id);
	},
	setSession: function() {
		Session.set('')
	}
});


Recipes.attachSchema( RecipeSchema );
