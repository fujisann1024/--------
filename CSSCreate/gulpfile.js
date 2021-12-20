const { src, dest } = require( 'gulp' );
const sass = require( 'gulp-sass' )(require('sass'));
 
exports.default = function() {
	return src( './css/*.scss' )
		.pipe( sass() )
		.pipe( dest( './css/' ) );
}