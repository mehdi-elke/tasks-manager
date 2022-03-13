const Communication = require("../../../models/communications/communication.js");
class DefaultTaskSender {

    send(task, user){
        const message = "send communication to the professional email";
        console.trace(message);
        return message;
    }
}

const defaultTaskSender = new DefaultTaskSender();
   
module.exports = defaultTaskSender;