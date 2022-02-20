const PersonalTask = require("../models/tasks/personal-task.js")
const PersonalTaskBuilder = require("../models/tasks/personal-task-builder.js")
const ProfessionalTask = require("../models/tasks/professional-task.js")
const MySchoolTask = require("../models/tasks/myschool-task.js")
const professionalTaskPrototype = new ProfessionalTask(1, "name", false, "company");

class TaskFactory {
    
    
    create(id, name, completed, company, priority, deadline){
        if(company == null){
            console.log("id" + id)
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

            if(company == "MySchool"){
                return new MySchoolTask(newProfessionalTask);
            }
            return newProfessionalTask;
        }
    }
}

const taskFactory = new TaskFactory();
Object.freeze(taskFactory);

module.exports = taskFactory;