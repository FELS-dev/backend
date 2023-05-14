const { successResponse, failResponse } = require("../helpers/methods")
const { Stands, TreasureHunt, TreasureHuntChoices } = require("../models/index")

exports.index = async (req, res) => {
    try {
        const stands = await Stands.findAll({
            include: [
                {
                    model: TreasureHunt,
                    as: "treasure_hunt",
                    include: [
                        {
                            model: TreasureHuntChoices,
                            as: "choices"
                        }
                    ]
                }
            ]
        });
        res.send(successResponse("Stands retrieved", { stands }))
    } catch (error) {
        res.status(500).send(failResponse("Error retrieving stands", { error }))
    }
};

exports.getStandById = async (req, res) => {
    try {
        const standId = req.params.id;
        const stand = await Stands.findOne({
            where: { id: standId },
            include: [
                {
                    model: TreasureHunt,
                    as: 'treasure_hunt',
                    include: [
                        {
                            model: TreasureHuntChoices,
                            as: 'choices'
                        }
                    ]
                }
            ]
        });

        if (stand) {
            res.send(successResponse('Stand retrieved', { stand }))
        } else {
            res.status(404).send(failResponse('Stand not found', {}))
        }
    } catch (error) {
        res.status(500).send(failResponse('Error retrieving stand', { error }))
    }
};

exports.create = async (req, res) => {
    try {
        const { name, description, location_x, location_y, qr_code } = req.body
        const stand = await Stands.create({ name, description, location_x, location_y, qr_code })
        res.send(successResponse("Stand created", { stand }))
    } catch (error) {
        res.status(500).send(failResponse("Error creating stand", { error }))
    }
};
