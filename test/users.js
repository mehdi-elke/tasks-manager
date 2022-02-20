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
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });
    });
    
});