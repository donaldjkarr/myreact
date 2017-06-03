// Include React
var React = require("react");
  
var Child = React.createClass({

  // Here we render the function
  render: function() {
    return (

        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-heading panelBack">
                    <span className="glyphicon glyphicon-paperclip"> Results</span> 
                </div>
             <div id="our-results" className="panel-body"></div>
            </div>
        </div>
    );
  }
});

module.exports=Child;