const crypto = require("crypto")
const path = require("path")
const JobDao = require("../../dao/job.dao")
const ajv = require("../../utils/ajv.util")
const schema = require("../../schema/job/create.schema")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)

async function createJob(req, res) {
    try {  
        const {title} = req.body
        const id = crypto.randomBytes(8).toString("hex")

        const valid = ajv.validate(schema, req.body)
        if (!valid)
            throw {
                status: 400,
            message: ajv.errors,
            }

        const job = await jobDao.createJob({ id, title })

        res.json(job)
    } catch (err) {
        res.status(err.status ?? 500).json({ error: err.message})
    }
}

module.exports = createJob