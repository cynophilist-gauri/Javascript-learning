const accountId = 144553;
let accountEmail = "gauri@gmail.com";
var accountPassword = "12345";
accountCity = "Bareilly";
let accountState;

//accountId = 2; Not allowed as it is const value

accountEmail = "g@gmail.com";
accountPassword = "123";
accountCity = "Bhopal";

console.log(accountId);

/*
  Prefer not using var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);