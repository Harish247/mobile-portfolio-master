module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.initConfig({
          imagemin: {                        
            static: {                        
            options: {                       
                optimizationLevel: 7,
                svgoPlugins: [{ removeViewBox: false }]
            },
            files: {                         
                'img/2048_opt.jpg': 'img/2048.png',
                'img/cam_be_like_opt.jpg': 'img/cam_be_like.jpg',
                'img/mobilewebdev_opt.jpg':'img/mobilewebdev.jpg',
                'img/profilepic_opt.jpg':'img/profilepic.jpg',
                'views/images/pizza_opt.jpg':'views/images/pizza.png',
                'views/images/pizzeria_opt.jpg':'views/images/pizzeria.jpg'
                }
            }
        }
    });
    grunt.registerTask('default', ['imagemin']);
};