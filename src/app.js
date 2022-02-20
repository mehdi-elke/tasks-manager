const express = require('express');
const app = express();

var tasksRouter = require('./routes/tasks-controller.js');
var usersRouter = require('./routes/users-controller.js');

app.use(express.json());


app.use('/api', tasksRouter);
app.use('/api', usersRouter);

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));
