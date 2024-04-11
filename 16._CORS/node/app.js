import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 8080;

// Enable CORS for all requests
app.use(cors());


// Manuel CORS setup example:
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get("/timestamp", (req, res) => {   
    res.json({ timestamp: new Date().toISOString() });
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});