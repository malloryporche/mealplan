Template.NewRecipe.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('ingredients'),
    self.subscribe('ingredientsSearchResults');
  });
});
Template.NewRecipe.events({
  'click .search-ingredient': function() {
    Meteor.call('searchIngredient', 'butter');
  }
});

Template.NewRecipe.helpers({
  ingredients: ()=> {

    console.log('jhkkl', IngredientsSearchResults.find({ name: 'butter'}));
    return IngredientsSearchResults.find({ name: 'butter'});
  }
})