const express = require("express");
const router = express();

// print the response message when accessing to the port
router.get("/test", (req, res) => {
    res.send({test: "Test."});
})