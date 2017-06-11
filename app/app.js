// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
var Parent = require("./components/Parent");

// This code here allows us to render our main component (in this case Parent)
ReactDOM.render(<Parent />, document.getElementById("app"));

$(document).on("click", "#searchButton", function() {
    $.ajax({
        method: "POST",
        url: "/articles/saved",
        data: {}
    }).done(function(data) {
        console.log(data);
    });
    $("#searhTerm").val("");
});