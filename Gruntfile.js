module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			dist: {
				files: {
					'public/css/style.css': 'scss/style.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 3 versions']
			},
			dist: {
				files: {
					'style.css': 'public/css/style.css'
				}
			}
		},
		uglify: {
			my_target: {
				files: {
					'public/js/base.min.js': ['js/menu.js', 'js/base.js'],
					'public/js/contacts.min.js': ['js/form.js', 'js/contacts.js']
				}
			}
		},
		watch: {
			css: {
				files: 'scss/**/*.scss',
				tasks: ['sass', 'autoprefixer'],
				options: {
					livereload: true, // needed to run LiveReload
				}
			},
			html: {
				files: ['content/*.hbs', 'content/**/*.hbs', 'content/**/*.json'],
				tasks: ['assemble']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['uglify']
			}
		},
		assemble: {
			options: {
				data: 'content/json/*.json',
				flatten: true,
				partials: ['content/includes/*.hbs'],
				layoutdir: 'content/layouts',
				layout: 'default.hbs',
				collections: [{
					name: 'service',
					sortby: 'posted',
					sortorder: 'ascending'
				}]
			},
			site: {
				files: {
					'public/': ['content/*.hbs', 'content/services/*.hbs']
				}
			}
		}
	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch', 'assemble']);
}
