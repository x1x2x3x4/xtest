const reqHandler = require('./requestHandler');

var routeValue = {};
routeValue['/'] = 					reqHandler.Home;
routeValue['/morrowind'] = 	reqHandler.Morrowind;
routeValue['/skyrim'] = 		reqHandler.Skyrim;

const route = function(pathName, response) {
	if (typeof routeValue[pathName] === 'function') {
		response.writeHead(200,{"Content-type":"text/html"});		
		response.write(routeValue[pathName]());
		response.end();
	}	
	else {
		response.writeHead(404,{"Content-type":"text/html"});
		response.write(pathName+' page doesn\'t exist');
		response.end();
	}
}

exports.route = route;