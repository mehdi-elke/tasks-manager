const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');

class UserService {


    constructor(){
        this.users = [];
        this.users.push(new User("Jean"));
        this.users.push(new User("Lucie"));
        this.users.push(new User("Ahmed"));
        this.users.push(new UserAdapter(new GoogleUser("Ahmed","K")));
        this.users.push(new UserAdapter(new GoogleUser("Jean","Blaguin")));
        this.users.push(new UserAdapter(new GoogleUser("Sandra","Nicouverture")));
    }



    findAll(){
        // In order to simulate external service call
        sleep(700);
        return this.users;
    }

    findByName(name){
        return this.users.find(user => user.getName() == name);
    }

    add(user){
        this.users.push(user);
    }

    remove(user){
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }
    
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const userService = new UserService();
   
  module.exports = userService;