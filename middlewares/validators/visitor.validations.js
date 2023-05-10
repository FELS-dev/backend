const { body ,param } = require('express-validator');

exports.visitorIdValidator = [
    param('visitor_id').isInt().withMessage('Visitor ID must be an integer')
];

exports.visitorValidator = [
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
]
