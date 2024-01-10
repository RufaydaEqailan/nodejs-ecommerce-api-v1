const express = require("express");
const app = express();

const dotenv = require('dotenv')
dotenv.config({path:"config.env"})
app.get('/', (req, res) => {
    res.send('Our App is Running V3.... ')
})

const PORT=process.env.PORT
app.listen(PORT || 8000, () => {
    console.log("App Running")
})

