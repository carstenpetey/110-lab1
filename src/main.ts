import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create our shape
/*const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});
*/

const start_x  = stage.width() / 2;
const start_y = stage.height() / 2;

const blob = new Konva.Line({
  points: [start_x, start_y, start_x + 65, start_y + 80, start_x + 130, start_y + 60,
    start_x + 100, start_y - 30, start_x + 35, start_y - 25, start_x, start_y],
  stroke: 'black',
  strokeWidth: 10,
  fill: '#d7f749ff',
  closed: true,
  tension: .6
})

// add the shape to the layer
layer.add(blob);

// add the layer to the stage
stage.add(layer);

