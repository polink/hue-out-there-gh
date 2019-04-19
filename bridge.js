'use strict';

//bridge related
let hue = require('node-hue-api');

let HueApi = hue.HueApi;
let host = "172.16.8.233";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";
let api = new HueApi(host, username);

const displayError = function(err) {
    console.error(err);
};

const lightOnOff = (lightNum, status) => {
    api.setLightState(lightNum, status)
        .fail(displayError)
        .done();
};

const lightGroup = (lightNum, status) => {
            api.setGroupLightState(lightNum, status)
            .fail(displayError)
            .done();
};

module.exports = {lightOnOff,lightGroup};
