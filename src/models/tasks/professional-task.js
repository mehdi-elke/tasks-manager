class ProfessionalTask {

    constructor(id, name, completed, company){
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.company = company;
        // It's only for simulate a slowly constructor !!!
        sleep(1000)
        
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