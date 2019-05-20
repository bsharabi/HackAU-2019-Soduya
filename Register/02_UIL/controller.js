const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bll = require('./../01_BLL/index');

const app = express();


// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, 
//and parses it to json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use(express.static(__dirname + "/views"));

// Use middlewares (app level - not controller level):
// this middleware allows to access files in the given folder (this is for css, js, etc...)



app.get("/", (req, res) => {
    res.status(200);
    res.sendfile(__dirname + "/views/index.html")
})


// ADD A NEW CAR (the car is a json object in the request body)
app.post("/chair", (req, res) => {

    let newCar = req.body;

    bll.addCar(newCar,
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




app.listen(process.env.PORT||3000, () => {
    bll.connectDb();
    bll.initDb();
    console.log("Server runs OK");
})
