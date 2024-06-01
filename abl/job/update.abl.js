const path = require("path")
const JobDao = require("../../dao/job.dao")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)

async function updateJob(req, res) {
    try {
        const { id, name } = req.body
        const updatedJob = await jobDao.updateJob({ id, name })
    
        res.json(updatedJob)
    } catch {
        res.status(err.status ?? 500).json({ error: err.message})
    }
}

module.exports = updateJob