let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Users APIs', () => {

    describe("Test GET route /api/communications", () => {
        it("It should return all users", (done) => {
            chai.request(server)
                .get("/api/communications")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });

        it("It should return Joe notification", (done) => {
            chai.request(server)
                .get("/api/communications/Joe")
                .set("x-api-key", "123")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.be.eq(1);
                done();
                });
        });

        
    });


});