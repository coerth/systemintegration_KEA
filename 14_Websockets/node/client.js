import WebSocket from "ws";

const websocketClient = new WebSocket("ws:/anders.serveo.net");

websocketClient.on("open", () => {
    console.log("Connected to server");
    websocketClient.send("Hello! Message from client");

    websocketClient.on("message", (message) => {
        console.log(`Received message => ${message}`);
        websocketClient.close();
    });

    websocketClient.onerror = (error) => {
        console.log(`Error: ${error}`);
        websocketClient.send(`Error: ${error}`);
    }

});