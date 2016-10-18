var http = require('http');
var fs = require('fs');
// var browserify = require('browserify');

var server = http.createServer(function(req, res){
	var url = req.url;
	var content = 'ok';
	var localFilePath = '';

	if(url.indexOf('demo.html')!==-1){
		localFilePath = './public/demo.html';
	}else if(url.indexOf('bundle.js')!==-1){
		localFilePath = './public/bundle.js';
	}

	if(localFilePath){
		content = fs.readFileSync(localFilePath, {encoding: 'utf8'});
	}

	res.end(content);
});

server.listen(8989);