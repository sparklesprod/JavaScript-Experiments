var canvas = document.querySelector('#canvas');
var context = canvas.getContext('2d');
var width = 25;
var height = 25;
var pixelSize = 10;
canvas.width = width * pixelSize;
canvas.height = height * pixelSize;

var arr = [];
    
var filling = false;

// Инициализация массива
function init() {
    var arr = [];
    for (i = 0; i < width; i++ ) {
        arr[i] = [];
        for (j = 0; j < height; j++) {
            var Cell = {
                solid: false
            }
            arr[i][j] = Cell;
        }
    }
    
    return arr;
}

// Отрисовка клетки
function drawCell(x, y, alive) {
    context.beginPath();
    context.rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    if (alive.solid) {
        context.fillStyle = '#000';
    } else {
        context.fillStyle = '#eee';
    }
    context.fill();
}

// Отображение
function display(arr) {
    for(var x = 0; x < arr.length; x++) {
                for(var y = 0; y < arr[x].length; y++) {
                        drawCell(x,y,arr[x][y]);
                }
        }
}

// Вычисление индекса клетки, по которой был произведен клик
function getCellByPosition(x, y) {
	var xIndex = Math.floor(x / pixelSize);
	var yIndex = Math.floor(y / pixelSize);
	return {
        x: xIndex,
        y: yIndex
    };
}

// Закрашивание клетки, по которой был произведен клик
function fillCellAtPositionIfNeeded(x, y, fillingMode) {
	var cellUnderCursor = getCellByPosition(x, y);
    x = cellUnderCursor.x;
    y = cellUnderCursor.y;
	if (arr[x][y].solid !== fillingMode) {
		arr[x][y].solid = fillingMode;
	}
}

// Вычисление координаты клика относительно верхнего левого края canvas
function handleMouseDown(event) {
    var e = getCellByPosition(event.layerX, event.layerY);
    var x = e.x;
    var y = e.y;
    filling = !arr[x][y].solid;
    fillCellAtPositionIfNeeded(event.layerX, event.layerY, filling);
    console.log(arr[x][y]);
    display(arr);
    
    canvas.addEventListener('mousemove', handleMouseMove, false)
    
}
    
function handleMouseUp() {
	canvas.removeEventListener('mousemove', handleMouseMove)
}
    
function handleMouseMove(event) {
	fillCellAtPositionIfNeeded(event.layerX, event.layerY, filling);
    display(arr);
}
    
canvas.addEventListener('mousedown', handleMouseDown, false)
canvas.addEventListener('mouseup', handleMouseUp, false)


// ОСНОВНОЙ ВЫЗОВ ФУНКЦИЙ
arr = init();
display(arr);