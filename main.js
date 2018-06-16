var grid_size = 20; // it must be 20
var x_axis_distance = 11; // number of coordinates
var y_axis_distance = 21;
var x_axis_start = { number: -1*20, suffix: '' };
var y_axis_start = { number: 1*20, suffix: '' };

var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_height/grid_size);
var num_lines_y = Math.floor(canvas_width/grid_size);


context.translate(y_axis_distance*grid_size, x_axis_distance*grid_size);


// Ticks marks X-axis
for(i=1; i<y_axis_distance; i++) {

    context.moveTo(-grid_size*i+0.5, -5);
    context.lineTo(-grid_size*i+0.5, 5);
    context.stroke();
    context.textAlign = 'end';
    context.fillText(-x_axis_start.number*i + x_axis_start.suffix, -grid_size*i+5, 15);
}

// Ticks marks  Y-axis
for(i=1; i<x_axis_distance; i++) {

    context.moveTo(-5, -grid_size*i+0.5);
    context.lineTo(5, -grid_size*i+0.5);
    context.stroke();
    context.textAlign = 'start';
    context.fillText(y_axis_start.number*i + y_axis_start.suffix, 10, -grid_size*i+5);
}
