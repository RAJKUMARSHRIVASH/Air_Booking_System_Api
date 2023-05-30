const express = require("express");
const FlightModel = require("../model/FlightModel");

const flightRouter = express.Router();

flightRouter.post("/", async (req, res) => {
    let payload = req.body;
    payload.departureTime = new Date().toISOString();
    payload.arrivalTime = new Date().toISOString();
    try {
        const flight = new FlightModel(payload);
        await flight.save();
        res.json("New flight added")

    } catch (error) {
        res.json("Something went wrong " + error);
    }
});

flightRouter.get("/", async (req, res) => {
   
    try {
        const flight = await FlightModel.find();

        res.json(flight)

    } catch (error) {
        res.json("Something went wrong " + error);
    }
});

flightRouter.get("/:id", async (req, res) => {
   const id = req.params.id;

    try {
        const flight = await FlightModel.findOne({_id:id});

        res.json(flight)

    } catch (error) {
        res.json("Something went wrong " + error);
    }
});

flightRouter.patch("/:id", async (req, res) => {
   const id = req.params.id;
   const payload = req.body;

    try {
        const flight = await FlightModel.findByIdAndUpdate({_id:id},payload);
        res.json("Flight details updated")

    } catch (error) {
        res.json("Something went wrong " + error);
    }
});

flightRouter.delete("/:id", async (req, res) => {
   const id = req.params.id;

    try {
        const flight = await FlightModel.findByIdAndDelete({_id:id});
        res.json("Flight has been deleted")

    } catch (error) {
        res.json("Something went wrong " + error);
    }
});




module.exports = flightRouter;