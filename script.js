let draggables = document.querySelectorAll('.draggable');
let dropzone = document.getElementById('cart-container');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData("text", event.target.id);
  });
});

dropzone.addEventListener('dragover', function(event) {
  event.preventDefault(); 
});

dropzone.addEventListener('drop', function(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let nodeCopy = document.getElementById(data).cloneNode(true);
  event.target.appendChild(nodeCopy);
});

function initializeDragAndDrop() {
    let draggables = document.querySelectorAll('.draggable');
    let dropzone = document.getElementById('cart-container');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData("text", event.target.id);
        });
    });

}