var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3005;


app.use(express.static(__dirname));
let Players = []

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('addPlayer', function(name){
    Players.push(name);
  });

  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});
  });
});

http.listen(PORT, function() {
  console.log('Serveur sur port 3005');
})
