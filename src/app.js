var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3005;

app.use(express.static(__dirname));

var varTimer = 60;
var pseudo = [];

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

  socket.on('init-pseudo', (newPseudo) => {
    pseudo.push(newPseudo);
  });

  socket.on('init-timer', () => {
    console.log('initialisation du chronometre etc');

    function loadTimer(){
     setTimeout(function(){
      if(varTimer > 0){
        varTimer -= 1;
        loadTimer();

        if(varTimer == 0){
              // messageJeu.innerText = 'Tour terminÃ©';
              console.log('fini!');
              varTimer = 60;
            }
            
          }
          io.emit('updateTimer',varTimer);
        },1000);
   }
   if (pseudo.length > 1) {
      loadTimer();
    }
 });

});

http.listen(PORT, function() {
  console.log('Serveur sur port 3005');
})




// setInterval(function(){

//         if(varTimer > 0){
//           varTimer -= 1;

//           if(varTimer == 0){
//             // messageJeu.innerText = 'Tour terminÃ©';
//             console.log('fini!');
//             varTimer = 60;
//           }

//         }


//         io.emit('updateTimer',varTimer);
//     },1000);