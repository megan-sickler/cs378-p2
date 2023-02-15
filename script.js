// store quantities and prices of all items
let quantities = {tacos: 0, churros: 0, margaritas: 0, chips: 0};
let prices = {tacos: 3, churros: 2, margaritas: 5, chips: 3};

// store subtotal as it changes
let subtotal = 0;

/* The editQuantity method is called each time a +/- button is clicked.
   The parameter button_id is the id of the button that was clicked, in
   the format 'itemname-direction'. */
function editQuantity(button_id) {
    
    // item_type is tacos, churros, margaritas, or chips
    let item_type = button_id.substring(0, button_id.indexOf("-"));

    // action_type is inc or dec
    let action_type = button_id.substring(button_id.indexOf("-") + 1);

    // edit 'quantities' object and total_price variable accordingly
    if (action_type === "inc") {
        quantities[item_type]++;
        subtotal += prices[item_type];
    } else if (action_type === "dec" && quantities[item_type] !== 0) {
        quantities[item_type]--;
        subtotal -= prices[item_type];
    }

    // edit the quantity and subtotal as they appear on the page
    document.getElementById(item_type + "-quantity").innerHTML = quantities[item_type];
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
}

/* The clearAll function is called each time the "Clear All" button is clicked.
   It sets all items' quantities to 0 and resets the subtotal to $0. */
function clearAll() {
    
    // edit stored & displayed quantity of each item
    for (let item_type in quantities) {
        quantities[item_type] = 0;
        document.getElementById(item_type + "-quantity").innerHTML = 0;
    }

    // edit stored & displayed subtotal
    subtotal = 0;
    document.getElementById("subtotal").innerHTML = "Subtotal: $0";
}

/* The order function is called every time the "Order" button is clicked.
   If no items are in the cart, it alerts the user of the issue. Otherwise,
   it thanks the user for their order and tells them what they ordered. */
function order() {
    if (subtotal === 0) {
        alert("Error: no items in cart.")
    } else {
        let message = "Thank you for your order!\n\nThis is what you ordered:";
        
        for (let item_type in quantities) {
            if (quantities[item_type] !== 0) {
                let unit_name = (quantities[item_type] === 1 ? "order" : "orders");
                message += "\n- " + quantities[item_type] + " " + unit_name + " of " + item_type;
            }
        }

        alert(message);
    }
}