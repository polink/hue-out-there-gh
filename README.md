![CF](http://i.imgur.com/7v5ASc8.png) Hue-out-there
==============================================

## 401 JavaScript N12 - Midterm Project
[![Build Status](https://dev.azure.com/consultations/hue_out_there/_apis/build/status/hue_out_there?branchName=master)](https://dev.azure.com/consultations/hue_out_there/_build/latest?definitionId=1&branchName=development)

### Author: Sarkis Aghazarian, Alistair Blake, Jessica Elliott, Erik Johnson, Karl Polintan, Anthony Triplett

### Links and Resources
* [repo](https://dev.azure.com/consultations/hue_out_there/_git/hue_out_there?path=%2FREADME.md&version=GBmaster)

### Modules
#### `app.js`
#### `main.js`
#### `bridge.js`
#### `router.js`

### Exported Values and Methods
* PORT=3000
* MONGODB_URI=mongodb://localhost/testdb
* SECRET=GUUUUUUUUURRRRRRRLLLLL

### Usage Notes and Examples
* As a user, from my computer, I can access all of my hue lights and change the hue light settings from one centralized place.
* As a user, I can login to my profile so that my settings are easily accessible.
* As a user, I can change settings so that my hue lights can have on-the-fly changes done to them.
* As a user, I can set up pre-made scenes so that I can manipulate groups of lights at any time.
* As a developer, I can test to see what lights are connected so that I know how many lights my code can affect.
* As a developer, I can test to see if I login successfully so that I can test if my hashing and authorization is running correctly.
* As a developer, I can hash the user’s data so that they are protected from malicious software.
* As a developer, I can have modular functions so that my code is not repetitive and is clean when it comes to being read by another developer.
* As a developer, I can log errors so that I know of any potential bugs or edge cases.

#### Tests
 To run tests, please use the `npm run test` command.
 
 Necessary hardware: 
* Bridge available to the network.
* Light bulbs connected to the bridge.