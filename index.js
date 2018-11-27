const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var randomString = require('random-string');
const PORT = process.env.PORT || 3001;

const app = express();
let data = require('./fish');
let comments = require('./comments');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send({ message: "hello world" });
    next();
});

app.get('/fish', (req, res, next) => {
    res.send({ fish: data })
});

app.get('/comments', (req, res, next) => {
    res.send({ comments })
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
    const randomNum = randomString({
        length: 10,
        numeric: true,
        letters: true,
        special: false,
        exclude: ['a', 'b', '1']
    });
    const newFishObj = {
        id: data.length + 1,
        name: body.name,
        price: body.price,
        desc: body.desc,
        type: body.type,
        image: body.image,
        code: randomNum
    };
    data.push(newFishObj);
    comments = Object.assign({
        [randomNum]:[]
    }, comments);
    console.log('newFishObj',newFishObj);
    res.send(newFishObj);
})

app.post('/messagePOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    const newObj = {
        text: body.comment.text,
        user: ''
    };
    comments[body.code].push(newObj);
    const newPost = comments[body.code];
    console.log('newPost',newPost)
    res.send(newPost);
})



app.listen(PORT);