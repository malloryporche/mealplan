
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
		console.log(this);

	},
	'click .fa-star': function() {
		Meteor.call('toggleFavorite', this._id, this.isFavorite);
	},
	'click .fa-star-o': function() {
		Meteor.call('toggleFavorite', this._id, this.isFavorite);
	}
});

