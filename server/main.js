import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup
});


// API Methods
Meteor.methods({
  searchIngredient: function (ingredient) {
    // Check cache for existing data on 'food'
    var cached = Meteor.call('ingredientsCache', ingredient, (err, result) => {

      if (result.data.length < 1) {
        HTTP.get(`http://api.nal.usda.gov/ndb/search/?format=json&q=${ingredient}&sort=n&max=25&offset=0&api_key=ikNXRh090B5fCEcORKuG8t4rePcOFd37M4Yt6AvU`, {}, function(err, response) {
          console.log(response.content);
        });
      }
    });
  }
});