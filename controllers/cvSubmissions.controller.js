const { successResponse, errorResponse } = require("../helpers/methods");
const { CvSubmissions } = require("../models");

exports.index = async (req, res) => {
    try {
        const cvSubmissions = await CvSubmissions.findAll();
        res.send(successResponse("CV submissions list", { cvSubmissions }));
    } catch (error) {
        res.status(500).send(errorResponse("Error fetching CV submissions", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const newCvSubmission = await CvSubmissions.create(req.body);
        res.send(successResponse("CV submission created", { newCvSubmission }));
    } catch(error) {
        res.status(500).send(errorResponse("Error creating CV submission", { error }));
    }
};