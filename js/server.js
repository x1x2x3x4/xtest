const http = require('http');
const app = require('express');
const mysql = require('mysql');
const sio = require('socket.io');

http.createServer(app);
sio = sio(http);


app.get()