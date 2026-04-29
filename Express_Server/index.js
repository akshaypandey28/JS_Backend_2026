const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', function (req, res) {
    console.log('get request')
    res.send("hello world")
})

app.post('/login', function (req, res) {
    console.log('post request')
    res.send("login successful");
})


app.patch('/update', function (req, res) {
    console.log('patch request')
    res.json({
        message: "This is a patch request",
        success: true
    })
})

app.listen(PORT, function process() {
    console.log(`server is started at port ${PORT}`)
})