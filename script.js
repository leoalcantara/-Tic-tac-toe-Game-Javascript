var player = null;
var selectedPlayer = document.getElementById('selected-player');

changePlayer('X');

function selectSquare(id){
   var square = document.getElementById(id);
   if(square.innerHTML !== '-'){
       return;
   }

   square.innerHTML = player;
   square.style.color = '#000';

   if(player === 'X'){
       player = 'O';
   } else {
       player = 'X';
   }

   changePlayer(player);

}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;


}