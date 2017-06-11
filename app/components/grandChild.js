  
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
             <div id="SavedResults" className="panel-body"></div>
            </div>
        </div>
    );
  }
});

module.exports = GrandChild;


