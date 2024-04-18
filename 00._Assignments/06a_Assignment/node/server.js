import { WebSocketServer } from "ws";


const PORT = process.env.PORT || 8080;

const wss = new WebSocketServer({ port: PORT});

wss.on("connection", (ws) => {
    console.log("Client connected", wss.clients.size);

    

    ws.on("close", () => {
        console.log("Client disconnected", wss.clients.size);

        
    });

    ws.on("message", (message) => {
        console.log(`Received message => ${message}`,);
        ws.send("Hello! Message from server");
        wss.clients.forEach((client) => {
            client.send(`Client connected ${wss.clients.size}`);
        });
    });
});