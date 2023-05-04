const { successResponse, errorResponse } = require("../helpers/methods");
const { TreasureHunt } = require("../models");

exports.index = async (req, res) => {
    try {
        const treasureHunts = await TreasureHunt.findAll();
        res.send(successResponse("Treasure hunts list", { treasureHunts }));
    } catch (error) {
        res.status(500).send(errorResponse("Error fetching treasure hunts", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const newTreasureHunt = await TreasureHunt.create(req.body);
        res.send(successResponse("Treasure hunt created", { newTreasureHunt }));
    } catch (error) {
        res.status(500).send(errorResponse("Error creating treasure hunt", { error }));
    }
};

