const { Stands } = require("../models");
const { successResponse } = require("../helpers/methods");

exports.index = async (req, res) => {
    const stands = await Stands.findAll();
    res.send(successResponse("List of all stands", { stands }));
};

exports.create = async (req, res) => {
    const newStand = await Stands.create(req.body);
    res.send(successResponse("Stand created successfully", { newStand }));
};