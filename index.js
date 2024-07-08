const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
        res.send("投稿完了");
    });
});

const port = 5000;
app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
});