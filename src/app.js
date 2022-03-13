const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks-controller.js');
const usersRouter = require('./routes/users-controller.js');
const communicationsRouter = require('./routes/communications/communications-controller.js');
const auth = require("./auth/auth.js");

app.use(express.json());

app.use(function(req, res, next) {
    if(auth.isAuthorized(req)){
        next();
    }
   throw new Error("User not authorized");
});

app.use('/api', tasksRouter);
app.use('/api', usersRouter);
app.use('/api', communicationsRouter);

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
