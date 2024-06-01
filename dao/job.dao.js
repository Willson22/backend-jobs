const path = require("path")

const DEFAULT_DATA_PATH = path.join(__dirname, "data", "jobs.json")

class JobDao {
    constructor(dataPath) {
        this.jobDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH
    }

    async getJob(id) {
        const jobs = await this._loadJobs()
        return jobs.find((job) => job.id === id)
    }

    async listJobs() {
        return await this._loadJobs()
    }

    async createJob(job) {
        const jobs = await this._loadJobs()

        const newJob = {
            id:crypto.randomBytes(8).toString("hex"),
            ...job,
        }

        jobs.push(newJob)

        await fs.writeFile(this.jobDataPath, JSON.stringify(jobs))
        return newJob
    }

    async updateJob(job) {
        const jobs = await this._loadJobs()
        const index = jobs.findIndex((j) => j.id === job.id)

        if (index <0)
            throw new Error(`Práce s identifikátorem ${job.id} neexistuje`)

        jobs[index] = {
            ...jobs[index],
            ...job,
        }

        await fs.writeFile(this.jobDataPath, JSON.stringify(jobs))
        return job
    }

    async deleteJob(id) {
        const job = await this._loadJobs()
        const index = jobs.findIndex((j) => j.id === id)

        if (index < 0) throw new Error(`Práce s identifikátorem ${id} neexistuje`)

        jobs.splice(index, 1)

        await fs.writeFile(this.jobDataPath, JSON.stringify(jobs))
    }

    async _loadJobs() {
        const data = await fs.readFile(this.jobDataPath)
        return JSON.parse(data)
    }
}

module.exports = JobDao