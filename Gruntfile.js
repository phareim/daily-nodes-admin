module.exports = function(grunt){

    grunt.initConfig({
        jshint : {
            files : ['lib/**/*js','models/**/*js','*js','test/*js']
        },
        watch : {
            files : ['lib/**/*js','models/**/*js','*js','test/*js'],
            tasks : ['jshint']
        }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
};