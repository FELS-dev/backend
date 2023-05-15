const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const DigitalPassController = require("../controllers/digitalPass.controller")
const StandController = require("../controllers/stand.controller")
const CvSubmissionController = require("../controllers/cvSubmission.controller")
const VisitorController = require("../controllers/visitor.controller")
const UserTreasureHuntProgressController = require("../controllers/userTreasureHuntProgress.controller")

const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")
const { createStandValidator, standIdValidator } = require('../middlewares/validators/stand.validations')
const { visitorIdValidator, visitorValidator, } = require('../middlewares/validators/visitor.validations')

const { createDigitalPassValidator, } = require('../middlewares/validators/digitalPass.validations')
const { userTreasureHuntProgressValidator, } = require('../middlewares/validators/userTreasureHuntProgress.validations')

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)

router.get("/visitors", VisitorController.index)
router.get("/visitors/:visitor_id", VisitorController.getVisitorById)
router.post("/visitors", validate(visitorValidator), VisitorController.createVisitor)

router.get("/digital-passes", DigitalPassController.index)
router.post("/digital-passes", validate(createDigitalPassValidator), DigitalPassController.create)
router.get('/visitors/:visitor_id/digital-passes', validate(visitorIdValidator), DigitalPassController.getDigitalPassesByVisitor)


router.get("/stands", StandController.index)
router.post("/stand", validate(createStandValidator), StandController.create)
router.get('/stand/:id', validate(standIdValidator), StandController.getStandById)


router.get("/user-treasure-hunt-progress", UserTreasureHuntProgressController.index)
router.post("/user-treasure-hunt-progress", validate(userTreasureHuntProgressValidator), UserTreasureHuntProgressController.create)

module.exports = router
