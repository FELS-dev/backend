const { successResponse, errorResponse } = require("../helpers/methods");
const { UserTreasureHuntProgress } = require("../models");

exports.index = async (req, res) => {
    try {
        const userTreasureHuntProgresses = await UserTreasureHuntProgress.findAll();
        res.send(successResponse("User treasure hunt progress list", { userTreasureHuntProgresses }));
    } catch (error) {
        res.status(500).send(errorResponse("Error fetching user treasure hunt progress", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const newUserTreasureHuntProgress = await UserTreasureHuntProgress.create(req.body);
        res.send(successResponse("User treasure hunt progress created", { newUserTreasureHuntProgress }));
    } catch (error) {
        res.status(500).send(errorResponse("Error creating user treasure hunt progress", { error }));
    }
};
