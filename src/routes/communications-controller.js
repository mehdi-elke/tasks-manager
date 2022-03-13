var express = require('express');
var communicationsRouter = express.Router();

const communicationService = require('./communication-service.js')


communicationsRouter.get("/communications" , (request, response) => {
    response.send(communicationService.findAll());
});

communicationsRouter.get("/communications/:userName" , (request, response) => {
    var userName = request.params.userName;
    response.send(communicationService.findByUserName(userName));
});


module.exports = communicationsRouter;