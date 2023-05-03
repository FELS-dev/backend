const { successResponse } = require("../helpers/methods")

exports.index = async (req, res) => {
  res.send(
    successResponse("Index get test", {
      data: "data"
    })
  )
}

exports.indexPost = async (req, res) => {
  res.send(
    successResponse("Index post test", {
      data: "data",
      request: req.body
    })
  )
}
