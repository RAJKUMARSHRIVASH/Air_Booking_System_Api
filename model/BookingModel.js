const mongoose = require("mongoose");
const UserModel = require("./UserModel");

const bookingSchema = mongoose.Schema({
    user: { type: "ObjectId", ref: 'user' },
    flight: { type: "ObjectId", ref: 'flight' }
})

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;