
//your code here
let draggedEL=null;
let droppedEL=null;

function dragStart(e) {
	draggedEL=e.target;
}
function dragOver(e){
	e.preventDefault();
}
function drop(e) {
	droppedEL=e.target;
  let dragStyle=window.getComputedStyle(draggedEL);
  let dropStyle=window.getComputedStyle(droppedEL);
   let tempid=draggedEL.getAttribute('id');
  draggedEL.setAttribute('id',droppedEL.getAttribute('id'));
  droppedEL.setAttribute('id',tempid);
  let tempContent=draggedEL.textContent;
  draggedEL.textContent=droppedEL.textContent;
  droppedEL.textContent=tempContent;
    draggedEL=null;
    droppedEL=null;
}
	
