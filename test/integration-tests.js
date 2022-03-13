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


    describe("Test complete task", () => {
        it("It should send notification when a task is assigned", (done) => {
            const taskId = 1;
            const task = {
                assigned: "Lucie"
            };
            chai.request(server)                
            .get("/api/communications/Lucie")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eq(0);
            });
            chai.request(server)                
                .patch("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('assigned').eq("Lucie");
                });
                chai.request(server)                
                .get("/api/communications/Lucie")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(1);
                    done();
                });
        });
    });
 
});