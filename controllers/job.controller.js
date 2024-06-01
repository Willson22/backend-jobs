const express = require("express")
const router = express.Router()

const listJobs = require("../abl/job/list.abl")
const getJob = require("../abl/job/get.abl")
const createJob = require("../abl/job/create.abl")
const updateJob = require("../abl/job/update.abl")
const loadJobs = require("../services/job/load.service")

router.get("/list", async (req,res) => {
    await listJobs(req, res)
/*    const job = [
        { id: 1, title: "Zahradník", place: "Praha", date: "12.5.2024" },
        { id: 2, title: "Programátor", place: "Liberec", date: "1.8.2024" },
        { id: 3, title: "Uklízečka", place: "Plzeň", date: "3.2.2024" }
    ]

    res.json(job)*/
})

router.get("/get", async (req, res) => {
    await getJob(req, res)
})

/*
router.get("/get", (req, res) => {
    const id = parseInt(req.query.id)
    const job = job.find((job) => job.id === id)

    res.json(job)
})
*/

router.get("/load", async (req, res) => {
    await loadJobs(req, res)
})

router.post("/create", async (req, res) => {
    await createJob(req, res)
})

router.put("/update", async (req, res) => {
    await updateJob(req, res)
})

router.delete("/delete", async (req, res) => {
    await deleteJob(req, res)
})

module.exports = router