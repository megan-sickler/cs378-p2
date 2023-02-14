// TODO: should i be storing this data or getting it from the site every time
let quantities = {tacos: 0, churros: 0, margaritas: 0, chips: 0};
let prices = {tacos: 3, churros: 2, margaritas: 5, chips: 3}; // TODO: variable in multiple places if the restaurant wants to change it :(

let subtotal = 0;

// button id is the id of the button that was clicked (item-name-direction)
function editQuantity(button_id) {
    
    // ie tacos, churros, margaritas, or chips
    let item_type = button_id.substring(0, button_id.indexOf("-"));

    // ie inc or dec
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