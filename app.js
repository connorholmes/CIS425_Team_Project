const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.send('index.html');
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
};

app.listen(port, function() {
    console.log('Server started on port ' + port);
});