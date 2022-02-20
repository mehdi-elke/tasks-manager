const { clone } = require("joi/lib/types/alternatives");
const PersonalTask = require("../models/personal-task.js")
const ProfessionalTask = require("../models/professional-task.js")
const professionalTaskPrototype = new ProfessionalTask(1, "name", false, "company");

class TaskFactory {
    
    
    create(id, name, completed, company){
        if(company == null){
            return new PersonalTask(id, name, completed);
        } else {
            var newProfessionalTask = professionalTaskPrototype.clone();
            newProfessionalTask.id = id;
            newProfessionalTask.name = name;
            newProfessionalTask.completed = completed;
            newProfessionalTask.company = company;
            return newProfessionalTask;
        }
    }
}

const taskFactory = new TaskFactory();
Object.freeze(taskFactory);

module.exports = taskFactory;