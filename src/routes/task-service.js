const UserAdapter = require("../models/users/user-adapter.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');

class TaskService {

    constructor(){
        this.tasks = [{
            id: 1,
            name: "Task 1",
            completed: false
        },
        {
            id: 2,
            name: "Task 2",
            completed: false
        },
        {
            id: 3,
            name: "Task 3",
            completed: false,
            assigned: "Jean"
        }
        ]
    }

    findAll(){
        return this.tasks;
    }

    findById(id){
       return this.tasks.find(task => task.id == id);
    }


    add(task){
        this.tasks.push(task);
    }

    remove(task){
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    notifyUserDeleted(user){
        this.tasks.filter(task => task.assigned == user.getName())
        .forEach(task => task.assigned = null);
    }
}


  const taskService = new TaskService();
   
  module.exports = taskService;