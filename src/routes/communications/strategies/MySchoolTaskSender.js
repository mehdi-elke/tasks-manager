const Communication = require("../../../models/communications/communication.js");

class MySchoolTaskSender {

    send(task, user){
        const message = "send communication to the personal email and send communication to the professor email";
        console.trace(message);
        return message;
    }
}

const mySchoolTaskSender = new MySchoolTaskSender();
   
module.exports = mySchoolTaskSender;