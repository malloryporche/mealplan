Template.RecipeSingle.onCreated(function(){
	var self = this;
	 
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
});

Template.RecipeSingle.helpers({
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	},
	updateRecipeId: function() {
		return this._id
	}
});

Template.RecipeSingle.events({
	'click .toggle-favorite': function() {
		// debugger
		var id = FlowRouter.getParam('id')
		console.log(id, id.isFavorite);
		Meteor.call('toggleFavorite', id);
	}
});