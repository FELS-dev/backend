const { DigitalPasses } = require("../models");
const { successResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    const digitalPasses = await DigitalPasses.findAll();
    res.send(successResponse("List of all digital passes", { digitalPasses }));
};

exports.create = async (req, res) => {
    const newDigitalPass = await DigitalPasses.create(req.body);
    res.send(successResponse("Digital pass created successfully", { newDigitalPass }));
};