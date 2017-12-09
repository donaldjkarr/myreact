//RESULTS

// Include React
var React = require("react");
  
var Child = React.createClass({

    handleClick: function(event) {
        var index = event.target.name;
        this.props.saveArticle(index);
    },
  
  // Here we render the function
  render: function() {
    return (

        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-heading panelBack">
                    <span className="glyphicon glyphicon-paperclip"> Results {this.props.apiArticles ? this.props.apiArticles.length : "no articles"}</span> 
                </div>
             <div id="our-results" className="panel-body">
                 {this.props.apiArticles.map((data, index) => {
                     return (
                        <li key={index}>
                            <div>
                                <h2>{data.headline.main}</h2>
                                <p>{data.source}</p>
                                <p>{data.snippet}</p>
                                <a>{data.web_url}</a>
                                <br/>
                                <a><button name={index} className="btn btn-info btn-lg articleSaveButton" onClick={this.handleClick}>Save Article</button></a>
                            </div>
                        </li>
                       );
                     }
                 )}
             </div>
            </div>
        </div>
    );
  }
});

module.exports = Child;