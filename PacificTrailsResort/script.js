// Assignment two : EXTENDED FUNCTIONALITY
// An event listen that fires when the DOM is fully loaded.
// Inside the event listener the variables are declared that  
// reference the elements that will be draggees and draggers


document.addEventListener('DOMContentLoaded', (e) => {
    let draggables = document.querySelectorAll('.draggable');
    let dropzone = document.getElementById('cart-container');
    let cartItemCount = 0; 

// draggables iterates over all the elements selected and stored as draggable
// the draggables are assigned as the "dragstart" html event API
// the data transfer is then set in the last line of this function
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData("text", e.target.id);
        });
    });
// An event listener is added to the dragover element which fires repeatedly during the drop
// this function also prevents many elements by being dropped into one another by preventing default
    dropzone.addEventListener('dragover', function(e) {
        e.preventDefault(); 
    });
//This event listener is triggered when drop occurs
// and prevents default behavior from occur
    dropzone.addEventListener('drop', function(e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        let nodeCopy = document.getElementById(data).cloneNode(true);
        e.target.appendChild(nodeCopy);
// this updates the cart item count as apart of future intended functionality to save all cart items
        cartItemCount += 1;
        updateCartIcon();
    });

// Extra Function to let the user know the drag and drop action was successful
    function updateCartIcon() {
        let cartIcon = document.getElementById('cart-icon');
        if (cartItemCount > 0) {
            cartIcon.src = './img/shoppingCartFull.png'; 
        } else {
            cartIcon.src = './img/shoppingCart.png';  
        }
    }
});

function toggleNav() {
    var nav = document.getElementById('vertical-nav');
    nav.classList.toggle('active');
  }
