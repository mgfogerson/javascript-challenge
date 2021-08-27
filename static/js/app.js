var tableData = data;

// YOUR CODE HERE!
//create selections for button and input
var loader = d3.select(window);
var input = d3.select("#filterbutton");
var form = d3.select("#form");
//create load function
loader.on("load", function(){
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

//create filter
input.on("click", filterform);
form.on("submit", filterform);

//create submit function
function filterform(){

    d3.event.preventDefault();

    var inputElement = d3.select("#ufo_form_input");

    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(ufos => ufos.datetime === inputValue);

    var tbody = d3.select("#tbody2");

    filteredData.forEach(ufos => {
        var row = tbody.append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};
//going to reuse this function for each other filter function








//create submit function
cityform.on("submit", function(){
    d3.event.preventDefault();
    var inputElement = d3.select("#ufo_form_input_city");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufos => ufos.city === inputValue);
    var tbody = d3.select("tbody");
    filteredData.forEach(ufos => {
        var row = tbody.empty().append("tr");
        Object.entries(ufos).forEach(([key, value]) => {
        var cell = row.empty().append("td");
        cell.text(value);
        });
    });
});

