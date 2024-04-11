import express, {urlencoded} from 'express';
import multer from 'multer';

const app = express(urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

const upload = multer({ dest: "uploads/" });

app.post("/form", (req, res) => {
    console.log(req.body);
    // delete req.body.password;
    res.send(req.body);
    });

app.post("/fileform", upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send(req.body);
    });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});