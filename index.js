const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening at port ${port}`));
