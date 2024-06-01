const express = require('express')
const expressSanitizer = require("express-sanitizer")
const helmet = require("helmet")
const app = express()

require("dotenv").config()

const router = express.Router()

app.use(express.json())

app.use(expressSanitizer())

app.use(helmet())

app.post("/test", (req, res) => {
    const clearData = req.sanitize(req.body.field)
})

app.use("/job", require("./controllers/job.controller"))



app.listen(process.env.PORT, () =>
    console.log(`Aplikace běží na portu ${process.env.PORT}`)
)