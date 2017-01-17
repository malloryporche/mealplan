
Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	}
})


Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id)

	},
	'click .fa-star, .fa-star-o': function() {
		Meteor.call('toggleFavorite', this._id, this.isFavorite);
	}
});

