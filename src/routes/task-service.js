const UserAdapter = require("../models/users/user-adapter.js");
const taskFactory = require("../factories/task-factory.js");
const GoogleUser = require("../models/users/google-user.js");
const User = require('../models/users/user.js');

class TaskService {

    constructor(){
        this.tasks = [];
        this.tasks.push(taskFactory.create(1,"Task 1", false, null,null, null, null));
        this.tasks.push(taskFactory.create(2,"Task 2", false, null,null, null, null));
        this.tasks.push(taskFactory.create(3,"Task 3", false, null,null, null, "Jean"));
        this.tasks.push(taskFactory.create(4,"Task 4", true, null,null, null, "Joe"));
        
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
    update(task){
        const index = this.tasks.findIndex(oldTask=>oldTask.id==task.id);
        this.tasks.splice(index, 1);
        this.tasks.push(task);
    }

    notifyUserDeleted(user){
        this.tasks.filter(task => task.assigned == user.getName())
        .forEach(task => task.assigned = null);
    }
}


  const taskService = new TaskService();
   
  module.exports = taskService;