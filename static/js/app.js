var tableData = data;

// YOUR CODE HERE!
//create selections for button and input
var button = d3.select("#tablebutton");
var form = d3.select("#form");
var cityform = d3.select('#form_city')
var stateform = d3.select('#form_state')
var countryform = d3.select("#form_country")
var shapeform = d3.select('#form_shape')
//create button function
button.on("click", function(){
    d3.event.preventDefault();
    var tbody = d3.select("tbody");
    tableData.forEach(ufo => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
//create submit function
form.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.datetime === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
//going to reuse this function for each other filter function
//create submit function
cityform.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input_city");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.city === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
stateform.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input_state");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.state === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
countryform.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input_country");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.country === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
shapeform.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input_shape");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.shape === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});
