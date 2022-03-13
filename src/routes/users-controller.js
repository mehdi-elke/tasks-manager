var express = require('express');
var usersRouter = express.Router();

const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');
const userService = require('./user-service-proxy.js')


usersRouter.get("/users" , (request, response) => {
    const users = userService.findAll();
    // According GDPR, access to user data will be logged
    users.forEach(user => console.log(user.getName()));
    response.send(users);
});

usersRouter.get("/users/:name", (request, response) => {
   
    const userName = request.params.name;
    const user = userService.findByName(userName);
    if(!user) return response.status(404).send("The user does not exist.");
    response.send(user);
});

usersRouter.delete("/users/:name", (request, response) => {
   
    const userName = request.params.name;
    const user = userService.findByName(userName);
    if(!user) return response.status(404).send("The user does not exist.");
    userService.remove(user);
    response.send(user);
});


module.exports = usersRouter;