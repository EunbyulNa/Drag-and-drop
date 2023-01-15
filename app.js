const dragItems = document.querySelectorAll(".draggable");
const dropBoxes = document.querySelectorAll(".dropbox");
let total = 0;

dragItems.forEach( (item) => item.addEventListener("dragstart", dragStart));

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

dropBoxes.forEach( (box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
  }
)

function dragEnter(e) {
e.preventDefault();
e.target.classList.add('dropboxEnterStyle');
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add('dropboxEnterStyle');
}

function dragLeave(e) {
e.target.classList.remove('dropboxEnterStyle');
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove('dropboxEnterStyle');

 const dragItemData = e.dataTransfer.getData("text");
 const dragItemId = document.getElementById(dragItemData);
 const dropboxData = e.target.getAttribute("id");
 const msg= document.querySelector('.finishMsg');

 if(dragItemData === dropboxData){
   e.target.appendChild(dragItemId);
   e.target.classList.add('dropDisplay');
   e.target.childNodes[1].classList.add('finishMsgStyle'); 
   e.target.style.backgroundColor = window.getComputedStyle(dragItemId).color;
   dragItemId.style.color = "white";


   dragItemId.setAttribute("draggable", "false");
   total ++;
   if(total === 4) {
     setTimeout(() => {
       msg.style.display = "block"
     },100)
   }
 }


}
