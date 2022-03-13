class ProfessionalTask {

    constructor(id, name, completed, assigned, company){
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.assigned = assigned;
        this.company = company;
        // It's only for simulate a slowly constructor !!!
        sleep(1000)
        
    }

    getId(){
      return this.id;
  }

}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


module.exports = ProfessionalTask;