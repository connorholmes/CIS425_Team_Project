const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/public//contact.html');
});

app.get('/products', function(req, res) {
    res.sendFile(__dirname + '/public/products.html');
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
};

app.listen(port, function() {
    console.log('Server started on port ' + port);
});