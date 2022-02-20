const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');
const userService = require('./user-service.js');


class UserServiceProxy {

    constructor(){
        this.users = [];
    }

    findAll(){
        if(this.users.length == 0){
            console.log("add to cache")
            this.users = userService.findAll();
        }
        return this.users;
    }

    add(user){
        this.users.push(user);
        userService.add(user);
    }
}


const userServiceProxy = new UserServiceProxy();
   
module.exports = userServiceProxy;