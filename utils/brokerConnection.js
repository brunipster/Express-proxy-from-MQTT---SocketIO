var mqtt = require('mqtt')
var configCountries = require('./configCountries')
var host = "tcp://mr2r9za6fwi0wf.messaging.solace.cloud:1883"

var config = {
    username: "covid-public-client",
    password: "covid19"
}

var client = mqtt.connect(host, config)

var topics = [...configCountries.topics,]

client.on('connect', () => {
    console.log("Connected to COVID PubSub+ Broker!")
    topics.forEach((topic) => {
        console.log("Subscribing to topic: ", topic)
        client.subscribe(topic)
    })

})

module.exports = { client };