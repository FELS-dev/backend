const { body } = require('express-validator')

exports.userTreasureHuntProgressValidator = [
    body('visitor_id').notEmpty().withMessage('Visitor ID is required'),
    body('hunt_id').notEmpty().withMessage('Hunt ID is required'),
    body('is_completed').isBoolean().withMessage('Is completed must be a boolean'),
    body('choice_id').optional().isInt().withMessage('Choice ID must be an integer'),
]
