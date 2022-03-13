const PersonalTask = require("../models/tasks/personal-task.js")
const PersonalTaskBuilder = require("../models/tasks/personal-task-builder.js")
const ProfessionalTask = require("../models/tasks/professional-task.js")
const MySchoolTask = require("../models/tasks/myschool-task.js")
const professionalTaskPrototype = new ProfessionalTask(1, "name", false, "company");

class TaskFactory {
    
    
    create(id, name, completed, company, priority, deadline, assigned){
        if(company == null){
            console.log("id" + id)
            return new PersonalTaskBuilder(id, name)
            .addCompleted(completed)
            .addPriority(priority)
            .addDeadline(deadline)
            .addAssigned(assigned)
            .build();
        } else if(company == "MySchool") {
            return new MySchoolTask(this.createProfessionalTask(id, name, completed, assigned, company));
        } else {
            return this.createProfessionalTask(id, name, completed, assigned, company);
        }
    }

    createProfessionalTask(id, name, completed, company){
        var newProfessionalTask = Object.create(professionalTaskPrototype);
        newProfessionalTask.id = id;
        newProfessionalTask.name = name;
        newProfessionalTask.completed = completed;
        newProfessionalTask.company = company;
        return newProfessionalTask;
    }
}

const taskFactory = new TaskFactory();
Object.freeze(taskFactory);

module.exports = taskFactory;