const Communication = require("../../models/communications/communication.js");
const communicationSender = require("./communication-sender.js");

class CommunicationService {

    constructor(){
        this.communications = [{
            userName: "Joe",
            taskId: 4,
            message: "The task is completed, your professor will be notified"
        }
        ]
    }

    sendCompletedTaskNotification(task, user){
        const communication = communicationSender.sendCompletedTaskNotification(task, user);
        this.communications.push(communication);
    }

    findAll(){
        return this.communications;
    }

    findByUserName(userName){
        this.communications.forEach(communication=>console.log(communication.userName));
        return this.communications.filter(communication => communication.userName == userName);
    }

    add(communication){
        this.communications.push(communication);
    }

}


  const communicationService = new CommunicationService();
   
  module.exports = communicationService;