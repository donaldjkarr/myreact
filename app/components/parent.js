// Include React
var React = require("react");

var helpers = require("../utils/helpers.js")

// Here we include all of the sub-components
var Child = require("./child");

var GrandChild = require("./grandChild");

var Search = require("./search");
  
var Parent = React.createClass({

    startSearch: function(query) {
        helpers.getSearch(query).then(function(response){
            console.log(response);
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
                <a className="btn btn-primary btn-lg" href="http://giphy.com/gifs/ohio-john-kasich-scotts-tots-uCxR4xD2XDfhK" target="_blank" role="button">Learn more</a>
                <a className="btn btn-info btn-lg" href="http://giphy.com/gifs/ohio-john-kasich-scotts-tots-uCxR4xD2XDfhK" target="_blank" role="button">Learn more</a>
                <a className="btn btn-success btn-lg" href="http://giphy.com/gifs/ohio-john-kasich-scotts-tots-uCxR4xD2XDfhK" target="_blank" role="button">Learn more</a>
            </p>
        </div>

        <Search startSearch={this.startSearch.bind(this)}/>

        <Child/>

        <GrandChild/>
        
    </div>
    );
  }
});

module.exports=Parent;