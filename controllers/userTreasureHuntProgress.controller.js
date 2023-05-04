const { UserTreasureHuntProgress } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const userTreasureHuntProgresses = await UserTreasureHuntProgress.findAll();
        res.send(successResponse("User treasure hunt progress retrieved", { userTreasureHuntProgresses }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving user treasure hunt progress", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { is_completed, visitor_id, hunt_id, choice_id } = req.body;
        const newUserTreasureHuntProgress = await UserTreasureHuntProgress.create({ is_completed, visitor_id, hunt_id, choice_id });
        res.send(successResponse("User treasure hunt progress created", { newUserTreasureHuntProgress }));
    } catch (error) {
        res.status(500).send(failResponse("Error creating user treasure hunt progress", { error }));
    }
};
