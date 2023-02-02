//create a variable to hold the quantity of available plane seats left on a flight

var planeSeatsLeft = 7;
		
//create a variable to hold the cost of groceries at checkout

var groceryCost = 19.99

//create a variable to hold a person's middle initial

var middleInital = "P"

//create a variable to hold true if it's hot outside and false if it's cold outside

var isItHotOutside = true
var isItColdOutside = false

//create a variable to hold a customer's first name

var customerFirstName = "Shawn"

//create a variable to hold a street address

var streetAdress = "924 Cypress St"

//print all variables to the console

console.log(planeSeatsLeft);
console.log(groceryCost);
console.log(middleInital);
console.log(isItHotOutside);
console.log(isItColdOutside);
console.log(customerFirstName);
console.log(streetAdress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable

console.log (planeSeatsLeft - 2);

//impulse candy bar purchase, add 2.15 to the grocery total
groceryCost = groceryCost + 2.15;
console.log (groceryCost);

//birth certificate was printed incorrectly, change the middle initial to something else

middleInital = "K";
console.log(middleInital);

//the season has changed, update the hot outside variable to be opposite of what it was

isItHotOutside = false;
console.log(isItHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice

var fullName = customerFirstName + " " + middleInital + " " + "Thill";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable

console.log("Hello " + fullName + " I can see that you live at " + streetAdress);