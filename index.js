require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const urlRoutes = require("./src/routes/urlRoutes");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.use("/api", urlRoutes);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
