let server = require("../src/app");
let chai = require("chai");
let chaiHttp = require("chai-http");


chai.should();
chai.use(chaiHttp); 

describe('Task APIs', () => {

    describe("Test GET route /api/tasks", () => {
        it("It should return all tasks", (done) => {
            chai.request(server)
                .get("/api/tasks")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    response.body.length.should.not.be.eq(0);
                done();
                });
        });
 
        it("It should NOT return all the tasks", (done) => {
            chai.request(server)
                .get("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });

    describe("GET /api/tasks/:id", () => {
        it("It should GET a task by ID", (done) => {
            const taskId = 1;
            chai.request(server)                
                .get("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id');
                    response.body.should.have.property('name');
                    response.body.should.have.property('completed');
                    response.body.should.have.property('id').eq(1);
                done();
                });
        });

        it("It should NOT GET a task by ID", (done) => {
            const taskId = 123;
            chai.request(server)                
                .get("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The task with the provided ID does not exist.");
                done();
                });
        });

    });
    

    /**
     * Test the POST route
     */
    describe("POST /api/tasks", () => {
        it("It should POST a new task", (done) => {
            const task = {
                name: "Task 5",
                completed: false
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(5);
                    response.body.should.have.property('name').eq("Task 5");
                    response.body.should.have.property('completed').eq(false);
                done();
                });
        });

        it("It should POST a new professional task", (done) => {
            const task = {
                name: "Task 6",
                completed: false,
                company: "MyCompany"
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(6);
                    response.body.should.have.property('name').eq("Task 6");
                    response.body.should.have.property('completed').eq(false);
                done();
                });
        });

        it("It should POST a multiple professional task", (done) => {
            const task = {
                name: "Task 7",
                completed: false,
                company: "MyCompany"
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(7);
                    response.body.should.have.property('name').eq("Task 7");
                    response.body.should.have.property('completed').eq(false);
                });

                const otherTask = {
                    name: "Task 8",
                    completed: false,
                    company: "MyCompany"
                };
                chai.request(server)                
                    .post("/api/tasks")
                    .send(otherTask)
                    .end((err, response) => {
                        response.should.have.status(201);
                        response.body.should.be.a('object');
                        response.body.should.have.property('id').eq(8);
                        response.body.should.have.property('name').eq("Task 8");
                        response.body.should.have.property('completed').eq(false);
                    done();
                    });
        });

        it("It should POST a new MySchool task", (done) => {
            const task = {
                name: "Task 9",
                completed: false,
                company: "MySchool"
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(201);
                    response.body.should.have.property('task').not.null;
                done();
                });
        });


        it("It should NOT POST a new task without the name property", (done) => {
            const task = {
                completed: false
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });

        it("It should NOT POST a new task without deadline when it's a high priority task", (done) => {
            const otherTask = {
                name: "Task 9",
                completed: false,
                priority: 1
            };
            chai.request(server)                
                .post("/api/tasks")
                .send(otherTask)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The deadline should be filled for high priority task!");
                done();
                });
        });

    });


    /**
     * Test the PUT route
     */
    describe("PUT /api/tasks/:id", () => {
        it("It should PUT an existing task", (done) => {
            const taskId = 1;
            const task = {
                name: "Task 1 changed",
                completed: true
            };
            chai.request(server)                
                .put("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('name').eq("Task 1 changed");
                    response.body.should.have.property('completed').eq(true);
                done();
                });
        });

        it("It should NOT PUT an existing task with a name with less than 3 characters", (done) => {
            const taskId = 1;
            const task = {
                name: "Ta",
                completed: true
            };
            chai.request(server)                
                .put("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });        
    });
    

    describe("PATCH /api/tasks/:id", () => {
        it("It should PATCH an existing task", (done) => {
            const taskId = 1;
            const task = {
                name: "Task 1 patch"
            };
            chai.request(server)                
                .patch("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('id').eq(1);
                    response.body.should.have.property('name').eq("Task 1 patch");
                    response.body.should.have.property('completed').eq(true);
                done();
                });
        });

        it("It should NOT PATCH an existing task with a name with less than 3 characters", (done) => {
            const taskId = 1;
            const task = {
                name: "Ta"
            };
            chai.request(server)                
                .patch("/api/tasks/" + taskId)
                .send(task)
                .end((err, response) => {
                    response.should.have.status(400);
                    response.text.should.be.eq("The name should be at least 3 chars long!");
                done();
                });
        });        
    });
    

    describe("DELETE /api/tasks/:id", () => {
        it("It should DELETE an existing task", (done) => {
            const taskId = 1;
            chai.request(server)                
                .delete("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(200);
                done();
                });
        });

        it("It should NOT DELETE a task that is not in the database", (done) => {
            const taskId = 145;
            chai.request(server)                
                .delete("/api/tasks/" + taskId)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.text.should.be.eq("The task with the provided ID does not exist.");
                done();
                });
        });

    });

});