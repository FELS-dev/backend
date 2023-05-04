const { TreasureHuntChoices } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const treasureHuntChoices = await TreasureHuntChoices.findAll();
        res.send(successResponse("Treasure hunt choices retrieved", { treasureHuntChoices }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving treasure hunt choices", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { choice, is_correct, hunt_id } = req.body;
        const newTreasureHuntChoice = await TreasureHuntChoices.create({ choice, is_correct, hunt_id });
        res.send(successResponse("Treasure hunt choice created", { newTreasureHuntChoice }));
    } catch (error) {
        res.status(500).send(failResponse("Error creating treasure hunt choice", { error }));
    }
};
