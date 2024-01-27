document.addEventListener('DOMContentLoaded', (event) => {
    let draggables = document.querySelectorAll('.draggable');
    let dropzone = document.getElementById('cart-container');
    let cartItemCount = 0; 

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

        cartItemCount += 1;
        updateCartIcon();
    });

    function updateCartIcon() {
        let cartIcon = document.getElementById('cart-icon');
        if (cartItemCount > 0) {
            cartIcon.src = './img/shoppingCartFull.png'; 
        } else {
            cartIcon.src = './img/shoppingCart.png';  
        }
    }
});
