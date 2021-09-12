const express = require("express")
const router = new express.Router()
const Schema = require("../models/dbschema")

router.post("/users", async (req, res) => {
    try {
        const data = req.body
        const dataAdded = new Schema(data)
        const inserted = await dataAdded.save()
        res.status(201).send(inserted)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/users", async (req, res) => {
    try {
        const allData = await Schema.find({}).sort({ "name": 1 })
        res.status(201).send(allData)
    } catch (error) {
        res.status(401).send(error)
    }
})
router.get("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getOne = await Schema.findById({ _id: _id })
        res.status(201).send(getOne)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateOne = await Schema.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(updateOne)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/users/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteOne = await Schema.findByIdAndDelete(_id)
        res.status(201).send(deleteOne)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router