const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000



var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port' + port)
    }
})

//sync

const db = require("./app/models");
db.sequelize.sync();