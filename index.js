
var customerName = 'bob';
console.log (customerName);


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

upperCaseCustomerName();


console.log(customerName);


function setBestCustomer() { 
    bestCustomer = 'not bob';
}
setBestCustomer();
console.log(bestCustomer); 



function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; 
}


setBestCustomer();
console.log(bestCustomer);

overwriteBestCustomer();
console.log(bestCustomer); 

const leastFavoriteCustomer = 'some customer';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another customer';
}
try {
    changeLeastFavoriteCustomer();
} catch (error) {
    console.log(error.message); 
}
console.log(leastFavoriteCustomer);