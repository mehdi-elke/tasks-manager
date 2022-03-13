const Communication = require("../../../models/communications/communication.js");
class Company3TaskSender {

    send(task, user){
        const message = "send communication to the technical leader";
        console.trace(message);
        return message;
    }
}

const company3TaskSender = new Company3TaskSender();
   
module.exports = company3TaskSender;