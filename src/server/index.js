const express = require("express");

const mockAPIResponse = require("./mockAPI");

//Express instance
const app = express();

//Setting the static folder
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//Port and server
const port = 3000;

app.listen(port, () => {
  console.log(`Listen port ${port}`);
});
