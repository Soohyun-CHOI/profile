// import express module
const express = require("express");
const app = express();

// handle api in batches
const api = require("./routes/index");
app.use("/api", api);

// use 4000 port not to conflict with the client
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})