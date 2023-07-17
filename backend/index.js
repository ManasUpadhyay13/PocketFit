const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())


// connecting to mongo database

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("connected"))
    .catch(() => console.log("failed"))


app.get("/", (req, res) => {
    res.send("hello world")
})


app.listen(8000, () => {
    console.log("server is running on port 3000");
}) 