
var React 		= require('react-native');
var _server 	= React.NativeModules.RNHTTPServer;
var _port   	= "9999";
var _base 		= "";
var _started	= false;

module.exports 	= {

	start: function(opts){
		if( _started ){
			console.warn('HTTPServer already running');
			return;
		}
		_port = opts.port;
		_base = 'http://127.0.0.1:'+ opts.port;
		_server.start(opts);
		_started = true;
	},

	stop: function(){
		if( !_started ){
			console.warn('HTTPServer not running');
			return;
		}
		_server.stop();
		_started = false;
	},

	url: function(cb){
		if( !_started ){
			console.warn('HTTPServer not running');
			cb('');
		}
		cb(_base);
	},

	dir: function(url, exts, cb){
		if( !_started ){
			console.warn('HTTPServer not running');
			return '';
		}

		console.log("Listing ", (_base + url) );

		fetch(_base + url)
			.then((response) => response.text())
			.then((responseText) => {
				//console.log(responseText);
				cb( parse_dirlist_getpaths(responseText, exts) );
			})
			.catch((error) => {
				console.warn(error);
			});
	}
}


function parse_dirlist_getpaths(html, extensions){
	
	var exts = extensions || ['png', 'jpg', 'jpeg'];
	
	var links = [];
	var tmp = html.split('<a href="');
	
	for(var i=0, len=tmp.length; i<len; i++){
		var lnk = tmp[i].split('">')[0];
		if( lnk.indexOf('.') > -1 ){
			var nam = lnk.split('/').slice(-1)[0].split('.')[0];
			var ext = lnk.split('.').slice(-1)[0];
			//console.log(lnk, nam, ext);
			if( exts.indexOf(ext) > -1 ){
				//links.push(lnk);
				links.push({file:nam, ext:ext, path:lnk});
			}
		}
	}
	//console.log(links);			
	return links;
}