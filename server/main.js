import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup
});

var setSearchResults = function(result) {
  IngredientsSearchResults.remove({});
  IngredientsSearchResults.insert(result);
};

// API Methods
Meteor.methods({
  searchIngredient: function (ingredient) {
    // Check cache for existing data on 'food'
    var ingredientsData = Meteor.call('ingredientsCache', ingredient);
    var dbHasData = ingredientsData.length > 0;

    if (!dbHasData) {
      HTTP.get(`http://api.nal.usda.gov/ndb/search/?format=json&q=${ingredient}&sort=n&offset=0&api_key=ikNXRh090B5fCEcORKuG8t4rePcOFd37M4Yt6AvU`, {}, function(err, response) {
        Ingredients.insert({name: ingredient, list: response.data.list.item });
        setSearchResults({name: ingredient, list: response.data.list.item });
      });
    } else {
      // console.log(ingredientsData[0].list );
      setSearchResults({name: ingredient, list: ingredientsData[0].list });
    }
  }
});