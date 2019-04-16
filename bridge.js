'use strict';

let hue = require('node-hue-api');
let HueApi = hue.HueApi;
let hueScene = hue.scene;

let host = "172.16.8.233";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";


let lightState = require('node-hue-api').lightState;

let displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2))
};


let displayError = function(err) {
    console.error(err);
};


// command line execution
const myArgs = process.argv.slice(2);

let sceneId =  "60VeO3KNkG1aec9";
let state = lightState.create();

// new instance of api
let api = new HueApi(host, username);


// creating a group
api.createGroup("a new group", [1, 2, 6, 7])
    .then(displayResults)
    .done();

function lightOp(param = myArgs[0]) {
// you can run: 'node bridge.js 1on'
switch(param) {
    case '1on':
        api.setLightState(1, state.on())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 2on'
    case '2on':
        api.setLightState(2, state.on())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 3on'
    case '6on':
        api.setLightState(6, state.on())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 4on'
    case '7on':
        api.setLightState(7, state.on())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 1off'
    case '1off':
        api.setLightState(1, state.off())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 2off'
    case '2off':
        api.setLightState(2, state.off())
            .then(displayResults)
            .fail(displayError)
            .done()
        break;
    // you can run: 'node bridge.js 3off'
    case '6off':
        api.setLightState(6, state.off())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // you can run: 'node bridge.js 4off'
    case '7off':
        api.setLightState(7, state.off())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // turn all lights on
    case 'groupon':
        api.setGroupLightState(4, state.on())
            .then(displayResults)
            .fail(displayError)
            .done();
        break;
    // turn all lights on
    case 'groupoff':
        api.setGroupLightState(4, state.off())
            .then(displayResults)
            .fail(displayError)
            .done();
    default:
        console.log('Sorry, invalid method');
    }
}

lightOp(myArgs[0])



