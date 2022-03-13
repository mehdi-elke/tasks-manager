const Joi = require('joi');

const taskSchema = {
    name: Joi.string().min(3).required(),
    completed: Joi.boolean(),
    company: Joi.string().allow(null),
    priority: Joi.number().integer().min(1).max(3).allow(null),
    deadline: Joi.date().allow(null),
    assigned: Joi.string().allow(null)
};

exports.validateTask = (task) => Joi.validate(task, taskSchema);
