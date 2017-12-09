//SAVED

// Include React
var React = require("react");
  
var GrandChild = React.createClass({

  // Here we render the function
  render: function() {
    return (

        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-heading panelBack">
                  <span className="glyphicon glyphicon-paperclip"> Saved</span> 
                </div>
             <div id="our-results" className="panel-body">
                 {this.props.savedArticles.map((data, index) => {
                     return (
                        <li key={index}>
                            <div>
                                <h2>{data.text}</h2>
                                <br/>
                                <a><button name={data._id} className="btn btn-danger btn-lg articleSaveButton">Delete Article</button></a>
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

module.exports = GrandChild;


