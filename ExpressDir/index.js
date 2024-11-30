const express = require('express')
const app = express()

// app.use(express.json())

Port = 3000;

app.use((req, res) => {
    code = "<h1>Fruits</h1> <ul><li>Apple</li><li>banana</li></ul>"
    res.send(code)


})

app.listen(Port, () => console.log(`Server is running at the Port ${Port} `))