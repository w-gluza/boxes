var grid_size = 20; // it must be 20
var x_axis_distance = 11; // number of coordinates
var y_axis_distance = 21;

var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_height / grid_size);
var num_lines_y = Math.floor(canvas_width / grid_size);


context.translate(grid_size, grid_size);


// Ticks marks X-axis
for (i = 0; i < y_axis_distance; i++) {

  context.moveTo(grid_size * i + 0.5, grid_size * x_axis_distance - 25);
  context.lineTo(grid_size * i + 0.5, grid_size * x_axis_distance - 15);
  context.stroke();
  context.textAlign = 'center';
  context.fillText(grid_size * i, grid_size * i, grid_size * x_axis_distance - 5);
}

// Ticks marks  Y-axis
for (i = 0; i < x_axis_distance; i++) {

  context.moveTo( grid_size * y_axis_distance - 25, grid_size * i + 0.5);
  context.lineTo( grid_size * y_axis_distance - 15, grid_size * i + 0.5,);
  context.stroke();
  context.textAlign = 'start';
  context.fillText(grid_size * i, grid_size * y_axis_distance - 10, grid_size * i + 3);
}
