'use strict';

let hue = require('node-hue-api');
let HueApi = hue.HueApi;
let hueScene = hue.scene;

let host = "172.16.8.233";
let username = "3RcWD2DoxBwDfmLquhTi8bVpXh7IzhLOw8GpfCe4";

// new instance of api
let api = new HueApi(host, username);


let lightState = require('node-hue-api').lightState;

let displayResults = function(result) {
    console.log(JSON.stringify(result, null, 2))
};


var displayError = function(err) {
    console.error(err);
};


let sceneId =  "60VeO3KNkG1aec9";
let state = lightState.create();


////////////////////CREATING A SCENE////////////////////////////
let sceneName  = "My New Scene",
    lightIds = 0;
let myNewScene = "qV9JSVRuTEyE6ZP";

// using a promise to create a scene
api.createBasicScene(lightIds, sceneName)
    .then(displayResults)
    .done();

// this calls the scene setting
api.activateScene(myNewScene)
    .then(displayResults)
    .done();
//////////////////////////////////////////////////////////////


// // command line execution
// const myArgs = process.argv.slice(2);
// // you can run: 'node bridge.js 1on'
// switch(myArgs[0]) {
//     case '1on':
//         api.setLightState(1, state.on())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 2on'
//     case '2on':
//         api.setLightState(2, state.on())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 3on'
//     case '6on':
//         api.setLightState(6, state.on())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 4on'
//     case '7on':
//         api.setLightState(7, state.on())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 1off'
//     case '1off':
//         api.setLightState(1, state.off())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 2off'
//     case '2off':
//         api.setLightState(2, state.off())
//             .then(displayResults)
//             .fail(displayError)
//             .done()
//         break;
//     // you can run: 'node bridge.js 3off'
//     case '6off':
//         api.setLightState(6, state.off())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     // you can run: 'node bridge.js 4off'
//     case '7off':
//         api.setLightState(7, state.off())
//             .then(displayResults)
//             .fail(displayError)
//             .done();
//         break;
//     default:
//         console.log('Sorry, invalid method');
//
// }








