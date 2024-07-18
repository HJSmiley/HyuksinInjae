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

// var express = require("express");
// var { createHandler } = require("graphql-http/lib/use/express");
// var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello() {
//     return "Hello world!";
//   },
// };

// var app = express();

// // Create and use the GraphQL handler.
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// );

// // Start the server at port
// // port 4000번 열어서 Node.js 띄우는 부분.
// app.listen(4000);
// console.log("Running a GraphQL API server at http://localhost:4000/graphql");

// var { ruruHTML } = require("ruru/server");

// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//   res.type("html");
//   res.end(ruruHTML({ endpoint: "/graphql" }));
// });

// var express = require("express");
// var { createHandler } = require("graphql-http/lib/use/express");
// var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     quoteOfTheDay: String
//     random: Float!
//     rollThreeDice: [Int]
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   quoteOfTheDay() {
//     return Math.random() < 0.5 ? "Take it easy" : "Salvation lies within";
//   },
//   random() {
//     return Math.random();
//   },
//   rollThreeDice() {
//     return [1, 2, 3].map((_) => 1 + Math.floor(Math.random() * 6));
//   },
// };

// var app = express();
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// );
// app.listen(4000);
// console.log("Running a GraphQL API server at localhost:4000/graphql");

// var express = require("express");
// var { createHandler } = require("graphql-http/lib/use/express");
// var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(/* GraphQL */ `
//   type Query {
//     rollDice(numDice: Int!, numSides: Int): [Int]
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   rollDice({ numDice, numSides }) {
//     var output = [];
//     for (var i = 0; i < numDice; i++) {
//       output.push(1 + Math.floor(Math.random() * (numSides || 6)));
//     }
//     return output;
//   },
// };

// var app = express();
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// );
// app.listen(4000);
// console.log("Running a GraphQL API server at localhost:4000/graphql");

// var express = require("express");
// var { createHandler } = require("graphql-http/lib/use/express");
// var { buildSchema } = require("graphql");

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(/* GraphQL */ `
//   type RandomDie {
//     numSides: Int!
//     rollOnce: Int!
//     roll(numRolls: Int!): [Int]
//   }

//   type Query {
//     getDie(numSides: Int): RandomDie
//   }
// `);

// // This class implements the RandomDie GraphQL type
// class RandomDie {
//   constructor(numSides) {
//     this.numSides = numSides;
//   }

//   rollOnce() {
//     return 1 + Math.floor(Math.random() * this.numSides);
//   }

//   roll({ numRolls }) {
//     var output = [];
//     for (var i = 0; i < numRolls; i++) {
//       output.push(this.rollOnce());
//     }
//     return output;
//   }
// }

// // The root provides the top-level API endpoints
// var root = {
//   getDie({ numSides }) {
//     return new RandomDie(numSides || 6);
//   },
// };

// var app = express();
// app.all(
//   "/graphql",
//   createHandler({
//     schema: schema,
//     rootValue: root,
//   })
// );
// app.listen(4000);
// console.log("Running a GraphQL API server at localhost:4000/graphql");

var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(/* GraphQL */ `
  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type Query {
    getMessage(id: ID!): Message
  }

  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);

// If Message had any complex fields, we'd put them on this object.
class Message {
  constructor(id, { content, author }) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}

// Maps username to content
var fakeDatabase = {};

var root = {
  getMessage({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  createMessage({ input }) {
    // Create a random id for our "database".
    var id = require("crypto").randomBytes(10).toString("hex");

    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
};

var app = express();
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);
app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000/graphql");
});

var { ruruHTML } = require("ruru/server");

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
