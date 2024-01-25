const express = require("express");
const router = express.Router();
const db = require("../database/index");

router.get("/projects", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM projects");
        res.json(results);
    } catch (err) {
        console.error("Error in query: ", err);
        res.status(500).send("Error in query");
    }
});

module.exports = router;