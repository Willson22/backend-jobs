const path = require("path")
const JobDao = require("../../dao/job.dao")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)

async function listJobs(req, res) {
    try {
        const jobs = await jobDao.listJobs()
        res.json(jobs)
    } catch (err) {
        res.status(err.status ?? 500).json({ error: err.message })
    }
}

module.exports = listJobs