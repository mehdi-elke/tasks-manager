const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');
const userService = require('./user-service.js');


class UserServiceProxy {

    constructor(){
        this.users = [];
        this.listeners = []
    }

    subscribe(eventListener){
        this.listeners.push(eventListener);
    }

    unsubscribe(eventListener){
        const removeIndex = this.listeners.findIndex(list => {
            return listener === list;
          });
      
          if (removeIndex !== -1) {
            this.listeners = this.listeners.slice(removeIndex, 1);
          }
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
    findByName(name){
        return this.findAll().find(user => user.getName() == name || user.name == name);
    }


    remove(user){
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        userService.remove(user);
        this.listeners.forEach(eventListener=>eventListener.notifyUserDeleted(user))
    }
}


const userServiceProxy = new UserServiceProxy();
   
module.exports = userServiceProxy;