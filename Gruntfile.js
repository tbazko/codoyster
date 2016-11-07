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
			options: {
				mangle: {
					except: ['jQuery']
				}
			},
			my_target: {
				files: {
					'public/js/base.min.js': ['js/base.js'],
					'public/js/front.min.js': ['js/slider.js', 'js/front-page.js'],
					'public/js/contacts.min.js': ['js/contacts.js'],
					'public/js/offices.min.js': ['js/dialog.js', 'js/offices.js'],
					'public/js/book.min.js': ['js/dialog.js', 'js/book.js'],
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
