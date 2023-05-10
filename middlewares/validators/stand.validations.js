const { body, param } = require('express-validator');

exports.createStandValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('location_x').isFloat().withMessage('Location X must be a float'),
    body('location_y').isFloat().withMessage('Location Y must be a float'),
    body('qr_code').notEmpty().withMessage('QR code is required')
];

exports.standIdValidator = [
    param('id').isInt().withMessage('Stand ID must be an integer')
];
