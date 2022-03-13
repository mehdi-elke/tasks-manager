const Communication = require("../models/communications/communication.js");


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
       var message = "";
        if(task.company == null) {
            message = "send communication to the personal email";
            console.log(message);
        } else if(task.company == "MySchool"){
            message = "send communication to the personal email and send communication to the professor email";
            console.trace(message);
        } else if (task.company == "Company1") {
            message = "send communication to the professional email and send communication to the manager email";
            console.debug(message);
        } else if (task.company == "Company2") {
            message = "send communication to the personal email and send communication to the professional email and send communication to the technical leader";
            console.warn(message);
        } else if (task.company == "Company3") {
            message = "send communication to the technical leader";
            console.trace(message);
        } else {
            message = "send communication to the professional email";
            console.trace(message);
        }
        var communication = new Communication(user.getName(), task.getId(), message);
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