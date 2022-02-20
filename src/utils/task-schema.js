const Joi = require('joi');

const taskSchema = {
    name: Joi.string().min(3).required(),
    completed: Joi.boolean(),
    company: Joi.string().allow(null)
};

exports.validateTask = (task) => Joi.validate(task, taskSchema);
