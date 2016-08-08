var React = require('react');
var Routes = require('../routes');

module.exports = React.createClass({
    render: function() {
        return (
            <html>
                <body>
                    <div id='app'>
                        {this.props.children}
                    </div>
                    <script src='bundle.js'></script>
                </body>
            </html>
        );
    }
});
