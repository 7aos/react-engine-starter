var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var Layout = require('../views/layout');
var App = require('../views/app');

var Router = React.createElement(Route, {path: '/', component: Layout}, 
    React.createElement(IndexRoute, {component: App}));
module.exports = Router;
