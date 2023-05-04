const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const DigitalPassController = require("../controllers/digitalPass.controller");
const StandController = require("../controllers/stand.controller")

const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)

router.get("/digital-passes", DigitalPassController.index)
router.post("/digital-passes", validate(indexValidator), DigitalPassController.create)

router.get("/stands", StandController.index);
router.post("/stands", validate(indexValidator), StandController.create);

module.exports = router
