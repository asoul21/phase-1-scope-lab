var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = 'james'

function upperCaseCustomerName(){
    if(customerName === 'bob'){
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(newName){
    bestCustomer = newName
}

function changeLeastFavoriteCustomer(){
    throw new Error('Assignment to constant variable.');
}