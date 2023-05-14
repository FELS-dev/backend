const { body, param } = require('express-validator')

exports.createStandValidator = [
    body('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 100 })
        .withMessage('Name must be between 2 and 100 characters'),
    body('description')
        .notEmpty()
        .withMessage('Description is required')
        .isLength({ min: 2, max: 500 })
        .withMessage('Description must be between 2 and 500 characters'),
    body('location_x')
        .isFloat({ min: -90.0, max: 90.0 })
        .withMessage('Location X must be a float between -90.0 and 90.0'),
    body('location_y')
        .isFloat({ min: -180.0, max: 180.0 })
        .withMessage('Location Y must be a float between -180.0 and 180.0'),
    body('qr_code')
        .notEmpty()
        .withMessage('QR code is required')
        .isLength({ min: 2, max: 255 })
        .withMessage('QR code must be between 2 and 255 characters')
];

exports.standIdValidator = [
    param('id').isInt().withMessage('Stand ID must be an integer')
]
