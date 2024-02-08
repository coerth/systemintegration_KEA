import express from 'express';

const app = express();

const dataHere = ["Banan", "Æble", "Pære", "Ananas", "Kiwi", "Appelsin", "Citron", "Lime", "Blomme", "Fersken", "Jordbær", "Brombær", "Hindbær", "Solbær", "Stikkelsbær", "Vindrue", "Melon", "Vandmelon", "Figen", "Kirsebær", "Mirabelle", "Blåbær", "Ribs", "Hyben", "Kvæde", "Papaya", "Mango", "Passionsfrugt", "Granatæble", "Kokosnød"];

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

app.get('/otherRoute', (req, res) => {
    res.send({message: 'Other Route'});
});

app.post('/postRequest', (req, res) => {
    res.send({message: 'Post Request'});
});

const PORT = 8080
app.listen(PORT, () => {console.log(`http://localhost:${PORT}`)});