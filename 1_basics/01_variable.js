const account_Id = 144553 //method 1  to declare a variable 

let account_Email = "shriyanshu@gmail.com" //method 2  to declare a variable 

var account_Password = " 12345"/* method 3
prefer not to use var because of issue in block scope and fucntioal scope */
accountCity = "jaipur" //method 4  to declare a variable 

// account_Id = /* showing error due to pre declration of the vairable using const */
let accountState;

account_Email = "shiry@gmail.com"
account_Password = "2321342"
accountCity = "Bengaluru"
console.log(account_Id);
console.table([account_Id , account_Email,account_Password,accountCity,accountState]);

