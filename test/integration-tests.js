let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Test complex behavior', () => {

    describe("Test user deletion", () => {
        it("It should remove the user name for assigned tasks", (done) => {
            chai.request(server)
                .delete("/api/users/Jean")
                .end((err, response) => {
                    response.should.have.status(200);
                });
                chai.request(server)
                .get("/api/tasks/3")
                .end((err, response) => {
                    response.body.should.have.property('assigned').eq(null);
                done();
                });
        });
    });

 
});