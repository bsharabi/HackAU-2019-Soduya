const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const cors = require('cors');
=======
>>>>>>> dc7480fbdcd659d826c33536a966f1c7046ab58d
const bll = require('./../01_BLL/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
<<<<<<< HEAD
app.use(cors());
app.use(express.static(__dirname + "/views"));
=======
>>>>>>> dc7480fbdcd659d826c33536a966f1c7046ab58d

// Use middlewares (app level - not controller level):
// this middleware allows to access files in the given folder (this is for css, js, etc...)
app.use(express.static(__dirname + "/views"));

// Main page:
app.get("/", (req, res) => {
    res.status(200);
    res.sendfile(__dirname + "/views/index.html")
})

// ADD A NEW CAR (the car is a json object in the request body)
app.post("/api/chair", (req, res) => {
    let newChair = req.body;

    bll.addChair(newChair,
        (p2, p3) => {
            res.status(201);
            res.send(p2);
        },
        (p1) => {
            res.status(400);
            res.send(p1);
        }
    );
})
