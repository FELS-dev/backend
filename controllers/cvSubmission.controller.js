const { CvSubmissions } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const cvSubmissions = await CvSubmissions.findAll();
        res.send(successResponse("CV submissions retrieved", { cvSubmissions }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving CV submissions", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { cv_file, submitted_at, visitor_id, stand_id } = req.body;
        const cvSubmission = await CvSubmissions.create({ cv_file, submitted_at, visitor_id, stand_id });
        res.send(successResponse("CV submission created", { cvSubmission }));
    } catch (error) {
        res.status(500).send(failResponse("Error creating CV submission", { error }));
    }
};
