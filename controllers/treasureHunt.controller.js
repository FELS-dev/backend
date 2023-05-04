const { TreasureHunt } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const treasureHunts = await TreasureHunt.findAll();
        res.send(successResponse("Treasure hunts retrieved", { treasureHunts }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving treasure hunts", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { question, stand_id } = req.body;
        const newTreasureHunt = await TreasureHunt.create({ question, stand_id });
        res.send(successResponse("Treasure hunt created", { newTreasureHunt }));
    } catch (error) {
        res.status(500).send(failResponse("Error creating treasure hunt", { error }));
    }
};
