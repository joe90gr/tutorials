var fs = require('fs');
var sass = require('node-sass');

var OUTPUT_CSS_FILE = './public/styles/style.css';
var OUTPUT_SOURCEMAP_FILE = './public/styles/style.css.map';
var OPTIONS = {
	file: './src/site/sass/style.scss',
	outFile: OUTPUT_CSS_FILE,
	outputStyle: 'compressed', // nested*, expanded, compact, compressed
	sourceMap: true
};

function build(err, result) {
	if (err) {
		console.log('somthing went wrong!', err);

		return;
	}

	if (result.css) {
		fs.writeFile(OUTPUT_CSS_FILE, result.css, writeSuccess);
	}

	if (result.map) {
		fs.writeFile(OUTPUT_SOURCEMAP_FILE, result.map, writeSuccess);
	}
}

function writeSuccess(err) {
	if (err) {
		console.log('somthing else went wrong!');

		return;
	}

	console.log('succesfully written', err);
}

sass.render(OPTIONS, build);
