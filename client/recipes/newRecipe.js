
Template.NewRecipe.events({
  'click .search-ingredient': function() {
    Meteor.call('searchIngredient', 'butter');
  }
});