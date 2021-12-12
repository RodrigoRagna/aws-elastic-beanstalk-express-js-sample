const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log("Mi home !")

    res.send('Hello World! in aws')
});

app.post('/test', (req, res) => {
    let r = Math.floor(Math.random() * 10)
    console.log("valor :", r)
    if (r <= 5) {
        res.status(409).send({ mensaje: "Error" });
    } else {

        res.status(200).send({ mensaje: "Exito" })
    }
}
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
