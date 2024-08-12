import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import path from "path";
import fs from 'fs';
var dir = 'uploads';
const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
        
    destination: function (req, file, callback) {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        callback(null, './uploads');
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

// var upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, callback) {
//             if (!fs.existsSync(dir)) {
//                 fs.mkdirSync(dir);
//             }
//             callback(null, './uploads');
//         },
//         filename: function (req, file, callback) {
//             callback( null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//         }
//     }),
//     fileFilter: function (req, file, callback) {
//         console.log("testingf"+path.extname(file.originalname));
//         var ext = path.extname(file.originalname)
//         if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
//             return callback(/*res.end('Only images are allowed')*/ null, false)
//         }
//         callback(null, true)
//     }
// });

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list",listFood);

foodRouter.post("/remove",removeFood);

export default foodRouter;