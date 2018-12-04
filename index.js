const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var randomString = require('random-string');
const multer = require('multer');
const cloudinary = require('cloudinary');
const keys = require('./config/keys');

const PORT = process.env.PORT || 3001;

cloudinary.config({ 
    cloud_name: keys.cloud_name, 
    api_key: keys.api_key, 
    api_secret: keys.api_secret
})

const app = express();
let data = require('./fish');
let comments = require('./comments');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('file needs to be jpeg or png format'), false);
    }
}

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});



app.use(cors());
app.use('/uploads', express.static('uploads'));
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

app.post('/fishPOST', upload.single('image'), (req, res, next) => {
    console.log('req.body', req.body)
    console.log('req.file',req.file)
    const body = req.body;
    const image = {};

    const randomStr = randomString({
        length: 10,
        numeric: true,
        letters: true,
        special: false,
        exclude: ['a', 'b', '1']
    });

    cloudinary.v2.uploader.upload(req.file.path, 
        function(error, result) {
            image.url = result.url;
            console.log('image',image)

            const newFishObj = {
                id: data.length + 1,
                name: body.name,
                price: body.price,
                desc: body.desc,
                type: body.type,
                image: image.url,
                code: randomStr
            };

            data.push(newFishObj);
            comments = Object.assign({
                [randomStr]:[]
            }, comments);

            console.log('newFishObj',newFishObj);
            res.send(newFishObj);
        });
})

app.post('/messagePOST', (req, res, next) => {
    console.log('req.body', req.body)
    const body = req.body;
    const randomStr = randomString({
        length: 20,
        numeric: true,
        letters: true,
        special: false
    });
    const newObj = {
        text: body.comment.text,
        user: '',
        cid: randomStr,
        rating: body.comment.rating
    };
    comments[body.code].push(newObj);
    const newPost = comments[body.code];
    console.log('newPost',newPost)
    res.send(newPost);
})

app.put('/messagePUT', (req, res, next) => {
    const body = req.body;
    console.log('body',body);
    const newObj = {
        text: body.text,
        user: body.user,
        cid: body.cid,
        rating: body.rating
    };
    comments[body.code] = [ ...comments[body.code].slice(0, body.arrIndex),
                            newObj, 
                            ...comments[body.code].slice(body.arrIndex + 1)];
    const newPost = comments[body.code];
    console.log('newPost',newPost)
    res.send(newPost);
})

app.delete('/messageDELETE', (req, res, next) => {
    const body = req.body;
    var mapped = comments[body.code].filter(obj => {
        return obj.cid != req.body.cid;
    })
    comments[body.code] = mapped;
    console.log('mapped',mapped)
    res.send(mapped);
})

app.post('/test', upload.single('image'), (req, res, next) => {
    console.log('req.file',req.file)
    const image = {};
    cloudinary.v2.uploader.upload(req.file.path, 
    function(error, result) {
        image.url = result.url;
        image.id = result.public_id;
        console.log('image',image)
        res.send(image);
    });
    
})



app.listen(PORT);