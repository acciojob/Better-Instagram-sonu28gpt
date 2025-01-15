
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
  let temp=dragStyle.backgroundImage;
  draggedEL.style.backgroundImage=dropStyle.backgroundImage;
  droppedEL.style.backgroundImage=temp;
    draggedEL=null;
    droppedEL=null;
}
	
