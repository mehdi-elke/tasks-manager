const Communication = require("../../models/communications/communication.js");
const company1TaskSender = require("./strategies/Company1TaskSender.js");
const company2TaskSender = require("./strategies/Company2TaskSender.js");
const company3TaskSender = require("./strategies/Company3TaskSender.js");
const personalTaskSender = require("./strategies/PersonalTaskSender.js");
const myschoolTaskSender = require("./strategies/MySchoolTaskSender.js");
const defaultTaskSender = require("./strategies/DefaultTaskSender.js");

class CommunicationSender {

    constructor(){
        this.strategies = new Map();
        this.strategies.set(null, personalTaskSender);
        this.strategies.set("Company1", company1TaskSender);
        this.strategies.set("Company2", company2TaskSender);
        this.strategies.set("Company3", company3TaskSender);
        this.strategies.set("MySchool", myschoolTaskSender);
    }

    sendCompletedTaskNotification(task, user){
        const message = this.getStrategy(task.companyName).send(user, task);
        return new Communication(user.getName(), task.getId(), message);
    }

    getStrategy(companyName){
        return this.strategies[''+companyName]||defaultTaskSender;
    }


}

const communicationSender = new CommunicationSender();
   
module.exports = communicationSender;