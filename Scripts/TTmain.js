// selections
const showChoice = document.getElementById("showchoice");
const tickets = document.getElementById("tickets");
const ticDel = document.getElementById("ticDel");
// Customer Details
const name = document.getElementById("name");
const house = document.getElementById("nameornumber");
const street = document.getElementById("street");
const town = document.getElementById("town");
const postCode = document.getElementById("postcode");
//definitions
let showCost;
let finalPrice;
let showName;
let userPay;
//Submit and Output
const checkBtn = document.getElementById("submit");
const output = document.getElementById("output");
// Ticket Prices
const ticPrice_phantom = 79;
const ticPrice_hamilton = 85;
const ticPrice_lionKing = 67;
const ticPrice_missSaigon = 83;
// Delivery Prices
const delMeth_eTicket = 0;
const delMeth_collect = 1.50;
const delMeth_posted = 3.99;
//Event listener
checkBtn.addEventListener("click", submitOrder);
//Function
function submitOrder() {
    event.preventDefault();
    switch (showChoice.value) {
        case "phantom":
            showName = "Phantom of the Opera";
            showCost = ticPrice_phantom * parseInt(tickets.value);
            break;

        case "hamilton":
            showName = "Hamilton";
            showCost = ticPrice_hamilton * parseInt(tickets.value);
            break;

        case "lion":
            showName = "Lion King";
            showCost = ticPrice_lionKing * parseInt(tickets.value);
            break;

        case "saigon":
            showName = "Miss Saigon";
            showCost = ticPrice_missSaigon * parseInt(tickets.value);
            break;
    }
    if (parseInt(tickets.value) < 6) {
        finalPrice = showCost;
        discVal = 0;
        discPerc = 0;
    }
    else if (parseInt(tickets.value) < 10 && parseInt(tickets.value) >= 6) {
        discVal = showCost * 0.1;
        finalPrice = showCost - discVal;
        discPerc = 10;
    }
    else {
        discVal = showCost * 0.15;
        finalPrice = showCost - discVal;
        discPerc = 15;
    }
    switch (ticDel.value) {
        case "etic":
            ticType = "E-Ticket - Free";
            userPay = finalPrice;
            break;
        case "boxoff":
            ticType = "Box Office Collection - £1.50";
            userPay = finalPrice + delMeth_collect;
            break;
        case "post":
            ticType = "In The Post - £3.99";
            userPay = finalPrice + delMeth_posted;
            break;
    }
    // This part should display the output beneath the webpage
    {document.getElementById("output").innerHTML =
    "Show:  " + showName + "<br>" +
    "Tickets Ordered:  " + tickets.value + "<br>" +
    "Amount Saved: £" + discVal.toFixed(2) + " (" + discPerc + "%)<br>" +
    "Ticket Type:  " + ticType + "<br>" + 
    "Grand Total: £" + userPay.toFixed(2) + "<br><br>" +
    "Address: " + name.value + "<br>" 
     + house.value + "<br>"
     + street.value + "<br>" 
     + town.value + "<br>" 
     + postCode.value}
 }