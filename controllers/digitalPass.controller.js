const { DigitalPasses } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const digitalPasses = await DigitalPasses.findAll();
        res.send(successResponse("Digital passes retrieved", { digitalPasses }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving digital passes", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { qr_code, visitor_id } = req.body;
        const digitalPass = await DigitalPasses.create({ qr_code, visitor_id });
        res.send(successResponse("Digital pass created", { digitalPass }));
    } catch (error) {
        res.status(500).send(failResponse("Error creating digital pass", { error }));
    }
};
