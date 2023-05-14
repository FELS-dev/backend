const { Visitor } = require('../models')
const { successResponse, failResponse } = require('../helpers/methods')

exports.index = async (req, res) => {
    try {
        const visitors = await Visitor.findAll();
        res.send(successResponse('Visitors retrieved', { visitors }))
    } catch (error) {
        res.status(500).send(failResponse('Error retrieving visitors', { error }))
    }
};

exports.getVisitorById = async (req, res) => {
    try {
        const visitorId = req.params.visitor_id
        const visitor = await Visitor.findByPk(visitorId)
        if (visitor) {
            res.send(successResponse('Visitor retrieved', { visitor }))
        } else {
            res.status(404).send(failResponse('Visitor not found'))
        }
    } catch (error) {
        res.status(500).send(failResponse('Error retrieving visitor', { error }))
    }
};

exports.createVisitor = async (req, res) => {
    try {
        const { first_name, last_name, email } = req.body
        const visitor = await Visitor.create({ first_name, last_name, email })
        res.send(successResponse('Visitor created', { visitor }))
    } catch (error) {
        res.status(500).send(failResponse('Error creating visitor', { error }))
    }
};
