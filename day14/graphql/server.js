// var { graphql, buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// // 구조에 대한 정의. 스키마의 내용에 맞게 쿼리를 날릴 수 있음.
// // 예: RDBMS 같은 경우 table, row, column이 있는데 이게 스키마.
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// // The rootValue provides a resolver function for each API endpoint
// // 스키마를 실제 돌려주는 부분.
// var rootValue = {
//   hello() {
//     return "Hello world!";
//   },
// };

// // Run the GraphQL query '{ hello }' and print out the response
// // 주소. endpoint가 /graphql 하나. createHandler는 schema와 rootValue 연결.
// graphql({
//   schema,
//   source: "{ hello }",
//   rootValue,
// }).then((response) => {
//   console.log(response);
// });

var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello() {
    return "Hello world!";
  },
};

var app = express();

// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);

// Start the server at port
// port 4000번 열어서 Node.js 띄우는 부분.
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
