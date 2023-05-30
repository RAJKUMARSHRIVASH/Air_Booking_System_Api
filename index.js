const express = require("express");
const { connection } = require("./config/db");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/user",userRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log(`Server is running at the port ${process.env.port}`)
    } catch (error) {
        console.log("Something went wrong while establishing the server "+error)
    }
})