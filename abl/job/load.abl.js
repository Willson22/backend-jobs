const path = require("path")
const JobDao = require("../../dao/job.dao")

async function loadJob(req, res) {
    const { id } = req.query
    const job = await jobDao.getJob(id)

    if(!job)
        return res.status(400).end(`Práce s identifikátorem ${id} neexistuje`)

    res.json({...job})
}

module.exports = loadJob