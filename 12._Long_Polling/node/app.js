import express from "express";

const app = express();

const PORT = 8080;

let clients = [];

app.get("/events/subscribe", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push(res);

    req.on("close", () => {
        console.log("a client has disconnected");
        clients = clients.filter(client => client !== res);
        console.log("clients", clients.length);
    });

});

app.get("/events/publish", (req, res) => {
    const newData = {data: "This is a new message"};

    clients.forEach(client => {
        client.send(newData);
    });

    clients = [];

    res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });