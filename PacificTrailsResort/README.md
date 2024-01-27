# Pacific-Trails-Resort
Pacific Trails Resort website

## Extended Functionality:

### Drag and Drop Icons

#### Overview
The HTML is now enhanced with added icons with the package selection table. These icons can be added to the cart through drag and drop functionality. Drag an icon in the Package Selection table to the shopping cart icon and it will change to a filled heart to indicate the cart items have been saved. 

#### JavaScript Implementation 
The following JavaScript implements drag-and-drop functionality for this project. The script is designed to allow users to drag items (represented by HTML elements with the 'draggable' class) into a designated cart area ('cart-container'). Upon successful drop, the item count in the cart is updated, and the cart icon is changed to reflect the new state.

#### DOMContentLoaded Event Listener: 
This event listener ensures that the JavaScript code runs only after the entire HTML document has been fully loaded. This is crucial for manipulating DOM elements.

#### Selectable Draggable Elements: 
We select all elements with the class draggable. These elements are the items that can be dragged and dropped into the cart.

#### Drag Start Event: 
For each draggable element, we add an event listener to handle the 'dragstart' event. When a user starts dragging an item, this event triggers, and we use dataTransfer.setData to store the ID of the dragged element. This ID is used later to identify which element is being dropped.

#### Drop Zone Selection: 
We select the cart container element, which acts as the drop zone for our draggable items.

#### Drag Over Event: 
The 'dragover' event is necessary for the drop action to work. By preventing the default behavior, we allow items to be dropped into the drop zone.

#### Drag Over Event: 
The 'dragover' event is necessary for the drop action to work. By preventing the default behavior, we allow items to be dropped into the drop zone.

#### Cart Item Count and Icon Update: 
After an item is dropped, we increment the cartItemCount variable and call updateCartIcon() to change the cart icon, indicating that the cart now contains items.
