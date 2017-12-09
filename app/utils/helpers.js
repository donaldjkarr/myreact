// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");

// Exporting an object with methods for retrieving and posting data to our API
module.exports = {

  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveArticles: function(clickData) {
    return axios.post("/api/saved", clickData);
  },

  getSearch: function(query) {
      var api_key = "api-key=1021dd8629d24dae81e2576852693881";
      var nyt_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
      var base_url = nyt_url + api_key + "&q=" +  query;
      return axios.get(base_url);
  },

   showSaved: function() {
      return axios.get("/api/saved");
  },

   delete: function(_id) {
     return axios.delete(`api/saved/${_id}`);
   }
};

