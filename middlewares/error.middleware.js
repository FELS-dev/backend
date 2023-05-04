const methods = require("../helpers/methods")
const errorLog = require("simple-node-logger").createSimpleLogger({
  logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
  timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

module.exports = (error, _, res,next) => {
  errorLog.error(error.message)
  return res.status(process.env.EXCEPTION_CODE).send(methods.failResponse(error.message))
}
