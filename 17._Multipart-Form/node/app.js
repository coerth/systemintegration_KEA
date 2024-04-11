import express, {urlencoded} from 'express';
import multer from 'multer';

const app = express(urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// const upload = multer({ dest: "./uploads/" });


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req);
    console.log(file);

    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // extract the file extension
    const fileExtension = file.originalname.split('.')[1];

    //Anders løsning
    const uniqueFileName = `${uniquePrefix}__${file.originalname}`;
    cb(null, uniqueFileName)
  }
});

function fileFilter(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];  

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type: " + file.mimetype);
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }

  cb(null, true);
}

const upload = multer({
   storage: storage, 
   limits: {
    fileSize: 10 * 1024 * 1024 // 10 MB
   },
   fileFilter
  })

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