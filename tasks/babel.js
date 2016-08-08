module.exports = function babel(grunt) {
    grunt.loadNpmTasks('grunt-babel');

    return {
        options: {
            sourceMap: false
        },
        dist: {
            files: [{
                expand: true,
                cwd: './public',
                src: ['**/*.js'],
                dest: './.build'
            }]
        }
    };
};
