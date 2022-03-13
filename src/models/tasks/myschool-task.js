class MySchoolTask {

    constructor(task){
        this.task = task;
    }

    notifyStudents(){
        return "notification sended";
    }

    getId(){
        return this.task.getId();
    }

}

module.exports = MySchoolTask;