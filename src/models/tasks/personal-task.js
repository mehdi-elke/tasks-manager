class PersonalTask {

    constructor(id, name, completed, priority, deadline, assigned){
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.priority = priority;
        this.deadline = deadline;
        this.assigned = assigned;
    }

    getId(){
        return this.id;
    }

}

module.exports = PersonalTask;