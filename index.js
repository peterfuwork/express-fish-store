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
    const body = req.body;
    const image = {};

    cloudinary.v2.uploader.upload(req.file.path, 
        function(error, result) {
            image.url = result.url;
            image.pid = result.public_id
            const isReefSafe = (body.reef_safe == true);
            const newFishObj = {
                id: image.pid,
                name: body.name,
                price: Number(body.price),
                desc: body.desc,
                type: body.type,
                image: image.url,
                care_level: body.care_level,
                temperament: body.temperament,
                diet: body.diet,
                reef_safe: isReefSafe,
                minimum_tank_size: Number(body.minimum_tank_size)
            };

            data.push(newFishObj);
            res.send(newFishObj);
        });
})

app.post('/messagePOST', (req, res, next) => {
    const body = req.body;
    const randomStr = randomString({
        length: 20,
        numeric: true,
        letters: true,
        special: false
    });
    const newObj = {
        text: body.text,
        uid: "",
        cid: randomStr,
        fid: body.fid,
        rating: body.rating
    };
    comments.push(newObj);
    res.send(newObj);
})

app.put('/messagePUT', (req, res, next) => {
    const body = req.body;
    comments.forEach(obj => {
        if (obj.cid === body.cid) {
            obj.text = body.text;
            obj.rating = body.rating;
        }
    })
    res.send(comments);
})

app.delete('/messageDELETE', (req, res, next) => {
    const body = req.body;
    const mapped = comments.filter(obj => {
        return obj.cid != body.cid;
    })
    comments = mapped;
    res.send(mapped);
})



app.listen(PORT);