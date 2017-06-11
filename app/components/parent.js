// Include React
var React = require("react");

var helpers = require("../utils/helpers.js")

// Here we include all of the sub-components
var Child = require("./child");

var GrandChild = require("./grandChild");

var Search = require("./search");
  
var Parent = React.createClass({

    getInitialState: function() {

       return { apiArticles: [] };
    },

    startSearch: function(query) {
        helpers.getSearch(query).then(function(response){
            console.log(response);
            this.setState({apiArticles: response.data.response.docs}); 
        });
    },

  // Here we render the function
  render: function() {
    return (
    <div className="container">
        <div className="jumbotron background">
            <div className="headertext">
                <h1>Scott's Tots NYT Search</h1>
                <p>The World's Second Finest News Source</p>
            </div>
            <p>
                <a id="funnyButton" className="btn btn-danger btn-lg" href="http://giphy.com/gifs/ohio-john-kasich-scotts-tots-uCxR4xD2XDfhK" target="_blank" role="button">Don't Press</a>
                <a id="otherhButton" className="btn btn-primary btn-lg" href="#" role="button">Search</a>

            </p>
        </div>

        <Search startSearch={this.startSearch.bind(this)}/>

        <Child apiArticles={this.state.apiArticles}/>

        <GrandChild savedArticles={this.state.savedArticles}/>
        
    </div>
    );
  }
});

module.exports=Parent;