var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var countryController = require('./controllers/country')
var mqtt = require('./utils/brokerConnection')
var { config_countries } = require('./utils/configCountries')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var port = process.env.PORT || '3000';
app.set('port', port);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/country', usersRouter);

const server = app.listen(port, () => {
    console.log(`Server started on port :`, app.get('port'));
});

var socketio = require('socket.io')
var io = socketio(server);

io.on('connection', (socket) => {
    console.log('new connection', socket.id)
    mqtt.client.on('message', (topic, message) => {
        let country = config_countries.find(country => country.topic == topic)
        if (country.country == "All") {
            console.log("Received message on All: ", topic)
            countryController.updateCountries(JSON.parse(message.toString()))
        } else {
            console.log("Received message on Topic: ", topic)
            socket.emit(country.socket, JSON.parse(message.toString()))
        }
    })
})