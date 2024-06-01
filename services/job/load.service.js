const path = require("path")
const JobDao = require("../../dao/job.dao")

const jobDao = new JobDao(
    path.join(__dirname, "..", "..", "data", "jobs.json")
)