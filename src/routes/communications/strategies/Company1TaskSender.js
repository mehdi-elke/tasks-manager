const Communication = require("../../../models/communications/communication.js");

class Company1TaskSender {

    send(task, user){
        const message = "send communication to the professional email and send communication to the manager email";
        console.debug(message);
        return message;
    }
}

const company1TaskSender = new Company1TaskSender();
   
module.exports = company1TaskSender;