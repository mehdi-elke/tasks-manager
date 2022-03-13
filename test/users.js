let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Users APIs', () => {

    describe("Test GET route /api/users", () => {
        it("It should return all users", (done) => {
            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });

        it("It should return all users for each call", (done) => {
            chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                });

                chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                });

                chai.request(server)
                .get("/api/users")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                    done();
                });

            
        });

        
    });

    describe("Test DELETE route /api/users", () => {
        it("It should delete Lucie", (done) => {
            chai.request(server)
                .get("/api/users/Lucie")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('name').eq("Lucie");
                });

            chai.request(server)
                .delete("/api/users/Lucie")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                });
            
            chai.request(server)
                .get("/api/users/Lucie")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });


        
    });
});