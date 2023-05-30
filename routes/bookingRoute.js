const express = require("express");
const BookingModel = require("../model/BookingModel");
const UserModel = require("../model/UserModel");
const FlightModel = require("../model/FlightModel");

const bookingRouter = express.Router();

bookingRouter.post("/booking",async (req, res) => {
    const {user,flight} = req.body;
    try {
        const verifyUser = await UserModel.findOne({_id:user});
        const verifyFlight = await FlightModel.findOne({_id:flight});
        if(verifyFlight && verifyUser){
            const booked = new BookingModel(req.body);
            await booked.save();
            res.json(`Flight ${verifyFlight.airline} has been Booked Successfully by ${verifyUser.name}`)

        }
    } catch (error) {
        res.json("couldn't Book Flight "+error)
    }


})
bookingRouter.get("/dashboard",async (req, res) => {
    try {
        const data = await BookingModel.find();
        data?res.json(data):res.json("No any Booking found")
    } catch (error) {
        res.json("Something went wrong while getting the Bookings")
    }
})

module.exports = bookingRouter;