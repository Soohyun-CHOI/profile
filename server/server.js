const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// import the router
const indexRouter = require("./router/index");
app.use("/", indexRouter);

// start server with a different port
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
