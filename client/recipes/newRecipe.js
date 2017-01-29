
Template.NewRecipe.events({
  'click .search-food': function() {
    Meteor.call('searchFood', 'butter');
  }
});