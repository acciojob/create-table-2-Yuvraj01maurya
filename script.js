function createTable() {
    //Write your code here

  var rows = prompt("Input number of rows");
  var columns = prompt("Input number of columns");
  
  var table = document.getElementById("myTable");

  // Clear existing table content if any
  table.innerHTML = '';

  for (var i = 0; i < rows; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < columns; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
