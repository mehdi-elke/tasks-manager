const PersonalTask = require("../models/personal-task.js")
const PersonalTaskBuilder = require("../models/personal-task-builder.js")
const ProfessionalTask = require("../models/professional-task.js")
const professionalTaskPrototype = new ProfessionalTask(1, "name", false, "company");

class TaskFactory {
    
    
    create(id, name, completed, company, priority, deadline){
        if(company == null){
            return new PersonalTaskBuilder(id, name)
            .addCompleted(completed)
            .addPriority(priority)
            .addDeadline(deadline)
            .build();
        } else {
            var newProfessionalTask = Object.create(professionalTaskPrototype);
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