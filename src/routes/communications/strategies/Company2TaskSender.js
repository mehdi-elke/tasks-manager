const Communication = require("../../../models/communications/communication.js");
class Company2TaskSender {

    send(task, user){
        const message = "send communication to the personal email and send communication to the professional email and send communication to the technical leader";
        console.warn(message);
        return message;
    }
}

const company2TaskSender = new Company2TaskSender();
   
module.exports = company2TaskSender;