'use strict';

var mysql = require('mysql');
var mongo = require('mongodb').MongoClient;

const http = require('http');
const url = require('url');
const router = require('./router');

const serverResponse = function(request,response) {
	router.route(url.parse(request.url).pathname,response);
}

exports.start = function() {
	http.createServer(serverResponse).listen(8888);
	console.log('...server has started...');
}

////////////////////////////////// CONNECTING TO MySQL //////////////////////////////////////////

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'xtest'
});

var queryStr = 'SELECT * FROM tablea';
connection.query(queryStr,function(err,result,fields){
	
	if(result) {
		console.log('----------------------------------------\n'+result);		
	} else {
		console.log(err);
	}
	connection.end();
	
});

//////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////// CONNECTING TO MongoDB /////////////////////////////////////////


var dbParam = 'mongodb://localhost:27017';

mongo.connect(dbParam, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else
	{    
    console.log('Connection established to', dbParam);
    // do some work here with the database.
    db.close();
  }
});