const path = require("path")
const JobDao = require("../../dao/job.dao")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)

async function getJob(req, res) {
    try {
        const { id } = req.query
        const job = await jobDao.getJob(id)
    
        res.json(job)
    } catch {
        res.status(err.status ?? 500).json({ error: err.message })
    }
}

module.exports = getJob