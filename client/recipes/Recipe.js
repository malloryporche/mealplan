Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});
Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});


Template.Recipe.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id)

	},
	'click .fa-star': function() {
		Meteor.call('toggleFavorite', this._id, this.isFavorite);
	},
	'click .fa-star-o': function() {
		Meteor.call('toggleFavorite', this._id, this.isFavorite);
	},
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
});

