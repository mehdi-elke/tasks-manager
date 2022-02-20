var express = require('express');
var usersRouter = express.Router();

const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');

const users = [];

users.push(new User("Jean"));
users.push(new User("Lucie"));
users.push(new User("Ahmed"));
users.push(new UserAdapter(new GoogleUser("Ahmed","K")));
users.push(new UserAdapter(new GoogleUser("Jean","Blaguin")));
users.push(new UserAdapter(new GoogleUser("Sandra","Nicouverture")));

usersRouter.get("/users" , (request, response) => {
    // According GDPR, access to user data will be logged
    users.forEach(user => console.log(user.getName()));

    response.send(users);
});

module.exports = usersRouter;