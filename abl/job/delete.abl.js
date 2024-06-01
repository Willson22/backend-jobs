const path = require("path")
const JobDao = require("../../dao/job.dao")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)

async function deleteJob(req, res) {
    try {
        const { id } = req. body
        await jobDao.deleteJob(id)
    
        res.status(204).end()
    } catch {
        res.status(err.status ?? 500).json({ error: err.message })
    }
}

module.exports = deleteJob