/* Author: 

*/
/*
function drag_start(event) {
	
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 

function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 

function drop(e) { 
	 var caller = e || e.srcElement;
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById(this.id);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 

var dm = document.getElementById('dragme'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 




//Al empezar el arrastramiento
function empezar(e ){
//Definimos el objeto arrastrado (su Id)como Text
e.dataTransfer.setData('Text', this.id);
//Permitimos dejarlo en sitio de 'mover'
e.dataTransfer.effectAllowed = 'move';
}

//Al llegar a la zona de destino 'List de compra'
function lista_compra(e ) {
// Dejamos mover
e.dataTransfer.dropEffect = 'move';
// Dejamos soltar
return false;
}
// Al soltar
function soltar (e ) {
//Indicamos el producto que ha comprado
//creamos una imagen

var newdiv = document.createElement('div'); 
newdiv.setAttribute('id', "dragme2")
//La imagen será igual a la que arrastramos
//añadimos la imagen a la lista
document.getElementById('testo').appendChild(newdiv);

 
newdiv.draggable="true";
newdiv.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

}

//Conectamos los eventos
//ondragover - Al mover sobre la lista
document.getElementById('testo').ondragover = lista_compra;
//ondragstart - Al empezar a arrastrar
//ondragstart - Al empezar a arrastrar
document.getElementById('leo').ondragstart = empezar;
//ondrop - Al soltar
document.getElementById('testo').ondrop = soltar;
*/

function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

var cols = document.querySelectorAll('ul .drag-item');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
});





















