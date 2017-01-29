import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.methods({
    searchFood: function (food) {
      HTTP.get(`http://api.nal.usda.gov/ndb/search/?format=json&q=${food}&sort=n&max=25&offset=0&api_key=ikNXRh090B5fCEcORKuG8t4rePcOFd37M4Yt6AvU`, {}, function(err, response) {
        console.log(response.content);
      })
    }
  });

});
