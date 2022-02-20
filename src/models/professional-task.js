class ProfessionalTask {

    constructor(id, name, company){
        this.id = id;
        this.name = name;
        this.completed = false;
        this.company = company;
        this.otherProperty = "value";
        // It's only for simulate a slowly constructor !!!
        sleep(1000)
    
    }

    clone(){
      return Object.create(this);
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