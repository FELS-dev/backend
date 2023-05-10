const { body, param } = require('express-validator');

exports.createDigitalPassValidator = [
    body('qr_code').notEmpty().withMessage('QR code is required'),
    body('visitor_id').isInt().withMessage('Visitor ID must be an integer')
];

exports.digitalPassIdValidator = [
    param('id').isInt().withMessage('Digital Pass ID must be an integer')
];
