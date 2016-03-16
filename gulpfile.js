// Include Gulp
var gulp = require( 'gulp' );

// Include Plugins
var svgmin = require( 'gulp-svgmin' );
var cheerio = require( 'gulp-cheerio' );
var svgstore = require( 'gulp-svgstore' );

// Minify our icons and make them into an inline sprite
gulp.task( 'icons', function() {
	return gulp.src( 'assets/svg/icons/*.svg' )
		.pipe( svgmin() )
		.pipe( svgstore( {
			fileName: 'icons.svg',
			inlineSvg: true
		} ) )
		.pipe( cheerio( {
		run: function( $, file ) {
			$( 'svg' ).addClass( 'hide' );
			$( '[fill]' ).removeAttr( 'fill' );
		},
		parserOptions: { xmlMode: true }
		}))
		.pipe( gulp.dest( 'assets/svg' ) );
});

// Watch files for changes
gulp.task( 'watch', function() {
	gulp.watch( 'assets/svg/icons/*', ['icons'] );
});

// Default Task
gulp.task( 'default', ['icons', 'watch'] );
