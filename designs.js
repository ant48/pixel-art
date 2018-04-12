const tbl = document.getElementById('pixel_canvas');

function makeGrid(heightGrid, widthGrid) {
  //clear the content whenever the <submit> button is clicked
  tbl.innerHTML = "";

  // define size input
  var heightGrid = document.getElementById('input_height').value;
  var widthGrid = document.getElementById('input_width').value;

  //define color input
  let colorGrid = document.getElementById('colorPicker');

  //create table element
  const grid = document.createElement('table');
  tbl.appendChild(grid);

  //create grid
  for (var h = 0; h < heightGrid; h++) {
    var row = document.createElement('tr');

    for (var w = 0; w < widthGrid; w++) {
      var cell = document.createElement('td');
      //add event listener for each cell to fill the background color
      cell.addEventListener('click', (function (cellCopy) {
        return function() {
          updateColor(cellCopy, colorGrid);
        };
      })(cell));

      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
};

function updateColor(cell, color) {
  //console.dir(cell); // test
  cell.style.backgroundColor = color.value;
};


const sub = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
sub.addEventListener("submit",function(event) {
  event.preventDefault();
  makeGrid();
});
