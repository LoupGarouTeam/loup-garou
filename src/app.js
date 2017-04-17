var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 3005;


app.use(express.static(__dirname));

var varTimer = 60;
var element = {};
var user = [];

io.on('connection', (socket) => {

  socket.on('addPlayer', function(name){
    
   
  });

  /* Liste des utilisateurs */
  socket.on('list-user', () => {
      io.emit('listUser', user)
      console.log(user)
  });

  /* Initialisation des user */
  socket.on('init-pseudo', (newPseudo) => {
    user.push(new element(newPseudo, undefined, 0))
  });

  socket.on('attribuer-role-player', (players) => {
    user = players
    console.log(user)
  })

  function element(name, role, status) {
    this.name = name;
    this.role = role;
    this.satus = status;
  }

  /* Timer des partis */
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
   if (user.length > 1) {
      loadTimer();
    }
 });

});

http.listen(PORT, function() {
  console.log('Serveur sur port 3005');
})