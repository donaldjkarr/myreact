var React = require("react");
var helpers = require("../utils/helpers.js");

var Search = React.createClass({

    getInitialState: function() {
        return {
            searchTerm: ""
        };
    },

    updateState: function(event) {
        this.setState({
            searchTerm: event.target.value
        });
    },

    handleSubmit: function(event) {
        event.preventDefault();
        this.props.startSearch(this.state.searchTerms);
    },

  render: function() {
    return (
 
    <div className="panel panel-primary">
        <div className="panel-heading panelBack">
            <span className="glyphicon glyphicon-th-list"> Search Parameters</span> 
        </div>
        <div className="panel-body">
        <form>
                <div className="form-group">
                <label htmlFor="searchTerm">Search Term</label>
                <input type="text" className="form-control" id="searchTerm" placeholder="Search anything" value={this.state.searchTerm} onChange={this.updateState.bind(this)}/>
                </div>
            <div className="form-group">
            <label htmlFor="retrieveNumber">Number of Records to Retrieve</label>
            <select className="form-control" id="retrieveNumber">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5" selected>5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            </div>
                <div className="form-group">
                <label htmlFor="startYear">Start Year (Optional)</label>
                <input type="text" className="form-control" id="startYear" placeholder=""/>
                </div>
            <div className="form-group">
            <label htmlFor="endYear">End Year (Optional)</label>
            <input type="text" className="form-control" id="endYear" placeholder=""/>
            </div>
            <button type="submit" id="searchButton" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Search</button>
            <button type="submit" id="clearButton" className="btn btn-danger">Clear Results</button>
        </form>
        </div>
    </div>

    );
  }
});


module.exports=Search;