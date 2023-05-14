const { body ,param } = require('express-validator')

exports.visitorIdValidator = [
    param('visitor_id').isInt().withMessage('Visitor ID must be an integer')
];

exports.visitorValidator = [
    body('first_name')
        .notEmpty()
        .withMessage('First name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('First name must be between 2 and 50 characters'),
    body('last_name')
        .notEmpty()
        .withMessage('Last name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Last name must be between 2 and 50 characters'),
    body('email').isEmail().withMessage('Email is not valid'),
]
