'use strict';

let hue = require('node-hue-api');
let HueApi = hue.HueApi;

let huescene = hue.scene
let lightState = require('node-hue-api').lightState;

let displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2))
};

var displayError = function(err) {
    console.error(err);
};

let host = "172.16.8.233";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";
let api = new HueApi(host, username);
let sceneId =  "60VeO3KNkG1aec9";
let state = lightState.create();


api.setLightState(1, state.off())
api.setLightState(2, state.off())
    .then(displayResults)
    .fail(displayError)
    .done();

console.log(process.argv.slice(2)[0])



