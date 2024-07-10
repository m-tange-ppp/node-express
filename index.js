const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true}));
const activities = require("./activities.json");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
        res.send("投稿完了");
    });
});

app.post("/update", function(req, res) {
    const activity = req.body.updateActivity;
    if (!activity) {
        res.status(400).send("活動が未定義です");
    } else {
        activities[0].activity = activity;
        res.send(activities);
    }
});

app.post("/delete", function(req, res) {
    activities.splice(req.body.number, 1);
    res.send(activities);
});

const port = 5000;
app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
});