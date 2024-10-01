
var downBtn = document.getElementById('down');
var upBtn = document.getElementById('up');
var circle = document.getElementById('circle');

var valueRotate = circle.style.transform;
var valueSum;

upBtn.onclick = function(){
     valueSum = valueRotate+ 'rotate(-90deg)'

     circle.style.transform = valueRotate

     valueRotate = valueSum
}

downBtn.onclick = function(){
    valueSum = valueRotate+ 'rotate(90deg)'

     circle.style.transform = valueRotate

     valueRotate = valueSum
}