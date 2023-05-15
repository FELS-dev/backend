require("dotenv").config()
require("express-async-errors")

const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")
const errorMiddleware = require('./middlewares/error.middleware')

const express = require("express")
const helmet = require('helmet');
const app = express()
const cors = require("cors")

// Allowed origins
const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : []

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))

app.use(helmet())
app.use(express.json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404;
    next(error);
});
module.exports = app
