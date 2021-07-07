const express = require("express");
const cors = require("cors"); //adds permissions to api to be accessed by other clients
const helmet = require("helmet"); // helps secure HTTP headers returned by express apps and prevents cross-site scripting attacks and other cross-site injections.
const morgan = require("morgan");

//server exports to index
const server = express();

//import routers
const welcomeRouter = require("../welcome/welcome-router");
const SchemeRouter = require("../schemes/scheme-router");
const stepsRouter = require("../steps/steps-router");

//global middleware
server.use(express.json(), helmet(), cors(), morgan("dev"));

//server endpoints ---->
server.use("/", welcomeRouter);
server.use("/api/schemes", SchemeRouter);
server.use("/api/steps", stepsRouter);

//middleware for CATCH ERROR on all endpoints of /api/accounts
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "500 error: Something went wrong",
  });
});

module.exports = server;

// //STATUS CODES

// 200 = Okay - put on successful GET/PUT requests
// 201 = Object Created, put on successful POST requests
// 204 = Object Deleted, put on successful DELETE requests

// 400 = BAD REQUEST - Object missing important information, POST/PUT
// 401 = UNAUTHORIZED - Failure to Login
// 403 = FORBIDDEN - did not login, tried to access anyway
// 404 = NOT FOUND - POST/PUT/DELETE object does not exist

// 418 = I AM A TEAPOT - Do not use - but funny!

// 500 = Internal Server Error - Your fault

// RESTRICT => don't let it be deleted
// CASCADE => update all things it was in
// SET NULL => set references as null
// DO NOTHING/NO ACTION => Do nothing
