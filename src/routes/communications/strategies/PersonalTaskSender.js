const Communication = require("../../../models/communications/communication.js");
class PersonalTaskSender {

    send(task, user){
        const message = "send communication to the personal email";
        console.log(message);
        return message;
    }
}

const personalTaskSender = new PersonalTaskSender();
   
module.exports = personalTaskSender;