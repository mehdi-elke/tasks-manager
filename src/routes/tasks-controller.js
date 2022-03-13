var express = require('express');
var router = express.Router();
const taskFactory = require("../factories/task-factory.js")
const utils = require('../utils/task-schema.js');
const taskService = require('./task-service.js');
const userService = require('./user-service-proxy.js');


userService.subscribe(taskService);

router.get("/tasks" , (request, response) => {
    response.send(taskService.findAll());
});

router.get("/tasks/:id" , (request, response) => {
    const taskId = request.params.id;
    const task = taskService.findById(parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");
    response.send(task);
});

router.post("/tasks", (request, response) => {
    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send("The name should be at least 3 chars long!")

    try {
        const task = taskFactory.create(taskService.findAll().length + 1, request.body.name, request.body.completed, request.body.company, request.body.priority, request.body.deadline);
        taskService.add(task);
        response.status(201).send(task);
    } catch (e) {
        // TODO: implement a better error handling
        response.status(400).send(e.message);
    }

});


router.put("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = taskService.findById(parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");

    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send("The name should be at least 3 chars long!")

    task.name = request.body.name;
    task.completed = request.body.completed;

    response.send(task);
});


router.patch("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = taskService.findById(parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");

    const { error } = utils.validateTask(request.body);

    if(error) return response.status(400).send("The name should be at least 3 chars long!")

    task.name = request.body.name;

    if(request.body.completed) {
        task.completed = request.body.completed;
    }
    response.send(task);
});


router.delete("/tasks/:id", (request, response) => {
    const taskId = request.params.id;
    const task = taskService.findById(parseInt(taskId));
    if(!task) return response.status(404).send("The task with the provided ID does not exist.");

    taskService.remove(task);

    response.send(task);
});


module.exports = router;