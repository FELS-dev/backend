const { Stand, TreasureHunt, TreasureHuntChoices } = require("../models");
const { successResponse, failResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    try {
        const stands = await Stand.findAll({
            include: [
                {
                    model: TreasureHunt,
                    as: "treasureHunts",
                    include: [
                        {
                            model: TreasureHuntChoices,
                            as: "choices",
                        },
                    ],
                },
            ],
        });
        res.send(successResponse("Stands retrieved", { stands }));
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving stands", { error }));
    }
};

exports.create = async (req, res) => {
    try {
        const { name, description, location_x, location_y, qr_code } = req.body;
        const stand = await Stand.create({ name, description, location_x, location_y, qr_code });
        res.send(successResponse('Stand created', { stand }));
    } catch (error) {
        res.status(500).send(failResponse('Error creating stand', { error }));
    }
};
