import express from "express";

const app = express();

const PORT = 8080;

app.use(express.static("public"));

const randomNumbers = [];

app.get("/randomNumbers", (req, res) => {
    res.send({data: randomNumbers});
});

app.get("/simulateNewRandomNumber", (req, res) => {
    const newNumber = simulateNewRandomNumber(1, 100);
    randomNumbers.push(newNumber);
    res.send({data: newNumber});
});

function simulateNewRandomNumber(min, max) {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return newRandomNumber;
}


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

