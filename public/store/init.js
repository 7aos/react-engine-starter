var Redux = require('redux');
var reducer = require('./reducer');

module.exports = function(initState) {
    return Redux.createStore(reducer, initState);
};
