const { body } = require("express-validator")

exports.indexValidator = [body("key").exists().withMessage("key is required")]
