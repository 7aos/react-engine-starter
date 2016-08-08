var client = require('react-engine/lib/client');
var Routes = require('../routes');
var initStore = require('../store/init');

var options = {
    routes: Routes,
    reduxStoreInitiator: initStore
};

document.addEventListener('DOMContentLoaded', function onLoad() {
    client.boot(options);
    console.log('REACT ENGINE CLIENT LOADED');
});
