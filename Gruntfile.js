module.exports = function(grunt){
    var mozjpeg = require('imagemin-mozjpeg');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.initConfig({
          imagemin: {                          // Task 
            static: {                          // Target 
            options: {                       // Target options 
                optimizationLevel: 7,
                svgoPlugins: [{ removeViewBox: false }]
                // use: [mozjpeg()]
            },
            files: {                         // Dictionary of files 
                'img/2048_opt.png': 'img/2048.png', // 'destination': 'source' 
                'img/cam_be_like_opt.png': 'img/cam_be_like.jpg',
                'img/mobilewebdev_opt.png':'img/mobilewebdev.jpg',
                'img/profilepic_opt.png':'img/profilepic.jpg',
                'views/images/pizza_opt.png':'views/images/pizza.png',
                'views/images/pizzeria_opt.png':'views/images/pizzeria.jpg'
                }
            }
        }
    });
    grunt.registerTask('default', ['imagemin']);
};