const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
const data = require('./fish');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send({ message: "hello world" });
    next();
});

app.get('/fish', (req, res, next) => {
    res.send({ fish: data })
});

app.get('/fish/butterflyfish', (req, res, next) => {
    let matchingFish = data.filter(fish => fish.type === "butterflyfish");
    res.send({ fish: matchingFish })
});

app.get('/fish/angelfish', (req, res, next) => {
    let matchingFish = data.filter(fish => fish.type === "angelfish");
    res.send({ fish: matchingFish })
});

app.get('/fish/tang', (req, res, next) => {
    let matchingFish = data.filter(fish => fish.type === "tang");
    res.send({ fish: matchingFish })
});

app.get('/fish/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let matchingFish = data.filter(fish => fish.id === id);
    if(!matchingFish.length) {
        res.status(404).send({ message: "hey this doesn't exist" })
    } else {
        res.send({ fish: matchingFish[0] })
    }
});

app.post('/fishPOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    const newObj = {
        id: data.length + 1,
        name: body.name,
        price: body.price,
        desc: body.desc,
        type: body.type,
        image: body.image,
        messages: []
    };
    data.push(newObj);
    res.send(newObj);
})

app.post('/messagePOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    const newObj = {
        text: body.message.text
    };
    data[(body.id) - 1].messages.push(newObj);
    res.send(newObj);
})



app.listen(PORT);