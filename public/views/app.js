var React = require('react');
var connect = require('react-redux').connect;

var App = React.createClass({
    render: function() {
        return React.createElement('h1', {}, this.props.title);
    }
});

function mapStateToProps(state) {
    return {
        title: state.title
    };
}

module.exports = connect(mapStateToProps)(App);
