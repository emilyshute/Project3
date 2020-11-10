// from data.js
var tbody = d3.select("tbody");

var tableData = data;

// YOUR CODE HERE!
// append rows of data to table
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
//button.on("click", runEnter);

// Complete the event handler function for the form -date
button.on("click", function () {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //empty the table
    tbody.html("")
    // Select the input element and get the raw HTML node
    
    var inputText = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputdate = inputText.property("value");
    
    // check
    console.log(inputdate);

    //filter data by input date
    var filteredData = tableData.filter(sighting => sighting.datetime === inputdate);
    
    // check
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
         });
    });
 });






 // city button
var button2 = d3.select("#city-btn");

// Complete the event handler function for the form -city
button2.on("click", function () {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //empty the table
  tbody.html("")
  // Select the input element and get the raw HTML node
  
  var inputText = d3.select("#sighting-city");

  // Get the value property of the input element
  var inputcity = inputText.property("value");
  
  // check
  console.log(inputcity);

  //filter data by input date
  var filteredData = tableData.filter(sighting => sighting.city=== inputcity);
  
  // check
  console.log(filteredData);

  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
       });
  });
});







// state button
var button3 = d3.select("#state-btn");

// Complete the event handler function for the form -city
button3.on("click", function () {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //empty the table
  tbody.html("")
  // Select the input element and get the raw HTML node
  
  var inputText = d3.select("#sighting-state");

  // Get the value property of the input element
  var inputstate = inputText.property("value");
  
  // check
  console.log(inputstate);

  //filter data by input date
  var filteredData = tableData.filter(sighting => sighting.state=== inputstate);
  
  // check
  console.log(filteredData);

  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
       });
  });
});








// country button
var button4 = d3.select("#country-btn");

// Complete the event handler function for the form -city
button4.on("click", function () {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //empty the table
  tbody.html("")
  // Select the input element and get the raw HTML node
  
  var inputText = d3.select("#sighting-country");

  // Get the value property of the input element
  var inputcountry = inputText.property("value");
  
  // check
  console.log(inputcountry);

  //filter data by input date
  var filteredData = tableData.filter(sighting => sighting.country=== inputcountry);
  
  // check
  console.log(filteredData);

  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
       });
  });
});

//state button
var button5 = d3.select("#shape-btn");

// Complete the event handler function for the form -city
button5.on("click", function () {
    
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //empty the table
  tbody.html("")
  // Select the input element and get the raw HTML node
  
  var inputText = d3.select("#sighting-shape");

  // Get the value property of the input element
  var inputshape = inputText.property("value");
  
  // check
  console.log(inputshape);

  //filter data by input date
  var filteredData = tableData.filter(sighting => sighting.shape=== inputshape);
  
  // check
  console.log(filteredData);

  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
       });
  });
});
