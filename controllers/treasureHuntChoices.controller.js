const { successResponse, errorResponse } = require("../helpers/methods");
const { TreasureHuntChoices } = require("../models");

exports.index = async (req, res) => {
    try {
        const treasureHuntChoices = await TreasureHuntChoices.findAll();
        res.send(successResponse("Treasure hunt choices list", { treasureHuntChoices }));
    } catch (error) {
        res.status(500).send(errorResponse("Error fetching treasure hunt choices", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const newTreasureHuntChoice = await TreasureHuntChoices.create(req.body);
        res.send(successResponse("Treasure hunt choice created", { newTreasureHuntChoice }));
    } catch (error) {
        res.status(500).send(errorResponse("Error creating treasure hunt choice", { error }));
    }
};

