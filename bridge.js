'use strict';

//bridge related
let hue = require('node-hue-api');

let HueApi = hue.HueApi;
// let hueScene = hue.scene;
let host = "172.16.8.233";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";
let api = new HueApi(host, username);

const displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2))
};

const displayError = function(err) {
    console.error(err);
};

const lightOnOff = (lightNum, status) => {
    api.setLightState(lightNum, status)
        .then(displayResults)
        .fail(displayError)
        .done();
};

const lightGroup = (lightNum, status) => {
            api.setGroupLightState(lightNum, status)
            .then(displayResults)
            .fail(displayError)
            .done();
};

module.exports = {lightOnOff,lightGroup};
