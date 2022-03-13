const PersonalTask = require("./personal-task.js")

class PersonalTaskBuilder {

    constructor(id, name){
        this.id = id;
        this.name = name;
        this.completed = false;
    }

    addCompleted(completed){
        this.completed = completed;
        return this;
    }

    addPriority(priority){
        this.priority = priority;
        return this;
    }

    addDeadline(deadline){
        this.deadline = deadline;
        return this;
    }

    addAssigned(assigned){
        this.assigned = assigned;
        return this;
    }

    build(){
        if ((this.deadline === null || this.deadline == undefined ) && (this.priority != null || this.priority != undefined)) {
            throw new Error('The deadline should be filled for high priority task!')
        }
        return new PersonalTask(this.id, this.name, this. completed, this.priority, this.deadline, this.assigned);
    }
}


module.exports = PersonalTaskBuilder;