// npm i dotenv
// make file ".env"
// SECRET_ID=xxxxx
// SECRET_CODE=yyyy

require("dotenv").config();

const { SECRET_ID: secretId, SECRET_CODE: secretCode } = process.env;

console.log(secretId);
console.log(secretCode);
