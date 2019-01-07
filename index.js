const express = require("express");
const bodyParser = require("body-parser");
//const morgan = require('morgan');
var cors = require("cors");
var randomString = require("random-string");
const multer = require("multer");
const cloudinary = require("cloudinary");
const keys = require("./config/keys");
const queries = require("./queries");
const bcrypt = require('bcrypt');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');

const PORT = process.env.PORT || 3001;

cloudinary.config({ 
    cloud_name: keys.cloud_name, 
    api_key: keys.api_key, 
    api_secret: keys.api_secret
})

const app = express();
//app.use(morgan('combined'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error("file needs to be jpeg or png format"), false);
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
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.send({ message: "hello world" });
    next();
});

app.get("/fish", (req, res, next) => {
    queries.getAllFish().then(fish => res.send({ fish }));
});

app.get("/users", (req, res, next) => {
    queries.getAllUsers().then(users => res.send({ users }));
});

app.get("/comments", (req, res, next) => {
    queries.getAllCommentsWithUsername().then(comments => res.send({ comments }));
});

app.get("/fish/butterflyfish", (req, res, next) => {
    queries.getAllFish().then(fish => {
        let matchingFish = fish.filter(singleFish => singleFish.type === "butterflyfish");
        res.send({ fish: matchingFish });
    });
});

app.get("/fish/angelfish", (req, res, next) => {
    queries.getAllFish().then(fish => {
        let matchingFish = fish.filter(singleFish => singleFish.type === "angelfish");
        res.send({ fish: matchingFish });
    });
});

app.get("/fish/tang", (req, res, next) => {
    queries.getAllFish().then(fish => {
        let matchingFish = fish.filter(singleFish => singleFish.type === "tang");
        res.send({ fish: matchingFish });
    });
});

app.get("/fish/:id", (req, res, next) => {
    let id = req.params.id;
    queries.getAllFish().then(fish => {
        let matchingFish = fish.filter(singleFish => singleFish.id === id);
        if(!matchingFish.length) {
            res.status(404).send({ message: "hey this doesn't exist" })
        } else {
            res.send({ fish: matchingFish[0] })
        }
    });
});

app.post("/fishPOST", upload.single("image"), (req, res, next) => {
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
            queries.createNewFishProduct(newFishObj)
            .then(newFishObj => {
                res.send(newFishObj[0]);
            });
        });
});

app.post("/messagePOST", (req, res, next) => {
    const body = req.body;
    const randomStr = randomString({
        length: 20,
        numeric: true,
        letters: true,
        special: false
    });
    if(body.rating === "") {
        body.rating = undefined;
    }
    const newCommentObj = {
        text: body.text,
        uid: body.uid,
        cid: randomStr,
        fid: body.fid,
        rating: body.rating
    };
    queries.createNewComment(newCommentObj)
    .then(newCommentObj => {
        queries.findUsernameWhenPostComment(newCommentObj[0])
        .then(newCommentObjWithUsername => {
            res.send(newCommentObjWithUsername[0]);
        });
    });
});

app.put("/messagePUT", (req, res, next) => {
    const body = req.body;
    queries.updateComment(body)
    .then(newCommentObj => {
        queries.getAllCommentsWithUsername()
        .then(comments => {
            res.send(comments);
        });
    });
});

app.delete("/messageDELETE", (req, res, next) => {
    const body = req.body;
    queries.deleteComment(body.cid)
    .then(newObj => {
        queries.getAllCommentsWithUsername()
        .then(comments => {
            res.send(comments);
        });
    });
});

app.post("/login", (req, res, next) => {
    const body = req.body;
    queries.getUserByUsername(body).then(user => {
        return bcrypt.compare(body.password, user[0].password)
        .then(isGood => {
            if (isGood) {
                res.send(user[0]);
            } else {
                res.send({error: "username or password is incorrect!!"}); 
            }  
        })
    })
});

app.post("/signup", (req, res, next) => {
    const body = req.body;
    const newUserObj = {
        first_name: body.first_name,
        last_name: body.last_name,
        birth_year: body.birth_year,
        email: body.email,
        username: body.username,
        password: bcrypt.hashSync(body.password, 8)
    }
    queries.createNewUser(newUserObj).then(user => {
        res.send(user[0]);
    })
});


// const localOptions = { usernameField: 'email' };
// const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
//     // Verify this email and password, call done with the user
//     // if it is the correct email and password
//     // otherwise, call done with false
//     User.findOne({ email: email }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false);}

//         // compare passwords = is `password` equal to user.password?
//         user.comparePassword(password, function(err, isMatch) {
//             if (err) { return done(err);}
//             if (!isMatch) { return done(null, false); }

//             return done(null, user);
//         });
//     });
// });

// passport.use(localLogin);

app.listen(PORT);