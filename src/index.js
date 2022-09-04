require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
	res.send("The server scout 44 Guatemala is online!!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});