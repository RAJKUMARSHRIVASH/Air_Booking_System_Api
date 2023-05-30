const express = require("express");
const { connection } = require("./config/db");
const userRouter = require("./routes/userRoute");
const flightRouter = require("./routes/flightRoute");
const bookingRouter = require("./routes/bookingRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/flights",flightRouter);
app.use("/api",bookingRouter);
app.use("/api",bookingRouter);

app.get("/",(req,res)=>{
    res.json("Home page\nTo get the flights and all bookings hit the endpoint /api/flights and /api/dashboard")
})

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Server is running at the port ${process.env.port}`);
    } catch (error) {
        console.log("Something went wrong while establishing the server "+error);
    }
})