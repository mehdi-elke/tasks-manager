const PersonalTask = require("../models/personal-task.js")
const ProfessionalTask = require("../models/professional-task.js")

class TaskFactory {
    
    create(id, name, completed, company){
        if(company == null){
            return new PersonalTask(id, name, completed);
        } else {
            return new ProfessionalTask(id, name, completed, company);
        }
    }
}

const taskFactory = new TaskFactory();
Object.freeze(taskFactory);

module.exports = taskFactory;