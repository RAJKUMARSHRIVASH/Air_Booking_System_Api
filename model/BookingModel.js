const mongoose = require("mongoose");
const { Schema, model, Types } = require("mongoose");
const { ObjectId } = Types;
const UserModel = require("./UserModel");
const FlightModel = require("./FlightModel");

const bookingSchema = mongoose.Schema({
    user: { type: ObjectId, ref: 'UserModel' },
    flight: { type: ObjectId, ref: 'FlightModel' }
})

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;
