var buildConfig = require('../webpack.config');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-webpack');
    return {
        build: buildConfig
    }
};
