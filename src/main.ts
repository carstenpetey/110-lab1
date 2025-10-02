import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

const layer = new Konva.Layer();
stage.add(layer);

const start_x  = stage.width() / 2;
const start_y = stage.height() / 2;

const blob = new Konva.Line({
  points: [start_x, start_y, start_x + 65, start_y + 80, start_x + 130, start_y + 60,
    start_x + 100, start_y - 30, start_x + 35, start_y - 25, start_x, start_y],
  stroke: 'black',
  strokeWidth: 10,
  fill: '#d7f749ff',
  closed: true,
  tension: .6,
  draggable: true,
  offsetX: start_x + 65,
  offsetY: start_y + 15 
})

blob.x(start_x + 65);
blob.y(start_y + 15);

blob.on('mouseover', function (e) {
  e.target.getStage().container().style.cursor = 'pointer';
});

blob.on('mouseout', function (e) {
  e.target.getStage().container().style.cursor = 'default';
});

layer.add(blob);

stage.add(layer);

blob.on('mousedown', function (e) { 
  blob.to({
    scaleX: 1.1,
    scaleY: 1.1,
    duration: 0.2
  });
});

blob.on('mouseup', function (e) {
 blob.to({
    scaleX: 1,
    scaleY: 1,
    duration: 0.2
  }); 
})
