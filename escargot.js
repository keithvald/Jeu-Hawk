window.onload = function(){

	initDices();
	initHawk();
	
};




function song(){
	var sateSateSate = new Audio();
	sateSateSate.src= "AUDIO/SateSateSate.mp3" ;
	sateSateSate.play();
	
}

function songfond(){
	var summerTime = new Audio();
	summerTime.src= "AUDIO/Summer Time - SKA 86 Projects NMCofficial.mp3" ;
	summerTime.play();
	
}



function getDicesConfig(){
	
	var diceImgYellow = "IMAGES/DES/JAUNE/meliodasJaune.png";
	var diceImgRed = "IMAGES/DES/ROUGE/meliodasRouge.png";
	var diceImgBlue = "IMAGES/DES/BLEU/meliodasBleu.png";
	var diceImgGreen = "IMAGES/DES/VERT/meliodasVert.png";
	var diceImgPink = "IMAGES/DES/ROSE/meliodasRose.png";
	
	var dicesConfig = [
			[ 'yellow', diceImgYellow ],
			[ 'red', diceImgRed ],
			[ 'blue', diceImgBlue ],
			[ 'green', diceImgGreen ],
			[ 'pink', diceImgPink ]
		]
		
	return dicesConfig;
	
}




function repositionHawk(){
	
	document.getElementById("hawk-blue").style.left = '17px';
	document.getElementById("hawk-pink").style.left = '17px';
	document.getElementById("hawk-yellow").style.left = '17px';
	document.getElementById("hawk-green").style.left = '17px';
	document.getElementById("hawk-red").style.left = '17px';
	
}




// on affiche les dés pour le départ
function initDices(){
	
	  document.getElementById("dice-one").src = "IMAGES/DES/ROUGE/meliodasRouge.png";
	  document.getElementById("dice-two").src = "IMAGES/DES/VERT/meliodasVert.png";
	  
	  document.getElementById("dice-one").style.display = 'block';
	  document.getElementById("dice-two").style.display = 'block';

}





// récupération de la position des escargots
function getHawkPosition(){
	
	var HawkPositionPink = document.getElementById("hawk-pink").offsetLeft;
	var HawkPositionYellow = document.getElementById("hawk-yellow").offsetLeft;
	var HawkPositionRed = document.getElementById("hawk-red").offsetLeft;
	var HawkPositionBlue = document.getElementById("hawk-blue").offsetLeft;
	var HawkPositionGreen = document.getElementById("hawk-green").offsetLeft;
	
	var positions = [
			[ 'yellow', HawkPositionYellow ],
			[ 'red', HawkPositionRed ],
			[ 'blue', HawkPositionBlue ],
			[ 'green', HawkPositionGreen ],
			[ 'pink', HawkPositionPink ]
		]
		
	return positions;
	
}







// on affiche les escargots sur la ligne de départ
function initHawk(){
	
	document.getElementById("hawk-blue").src = "IMAGES/HAWK/BLEU/HawkBleu.png";
	document.getElementById("hawk-pink").src = "IMAGES/HAWK/ROSE/HawkRose.png";
	document.getElementById("hawk-yellow").src = "IMAGES/HAWK/JAUNE/HawkJaune.png";
	document.getElementById("hawk-green").src = "IMAGES/HAWK/VERT/HawkVert.png";
	document.getElementById("hawk-red").src = "IMAGES/HAWK/ROUGE/HawkRouge.png";
	
	document.getElementById("hawk-blue").style.display =  'block';
	document.getElementById("hawk-pink").style.display =  'block';
	document.getElementById("hawk-yellow").style.display =  'block';
	document.getElementById("hawk-green").style.display =  'block';
	document.getElementById("hawk-red").style.display =  'block';
	
}







// Lancement des dés //
function roll(){
	
	// on récupère les images et les couleurs qui vont avec
    var dices = getDicesConfig();
	
	// -------- Lancer du dé N°1
	var launchOne = Math.floor(Math.random() * dices.length);
	//on récupère la couleur du nouveau dé
	var colorOne = dices[launchOne][0];
	// on affiche l'image du nouveau dé
	document.getElementById("dice-one").src = dices[launchOne][1];
	



	//on récupere les img et couleurs du 2eme Dés
	var dices = getDicesConfig();

	// -------- Lancer du dé N°2
	var launchTwo = Math.floor(Math.random() * dices.length);
	var colorTwo = dices[launchTwo][0];
	document.getElementById("dice-two").src = dices[launchTwo][1];
	
	// on va appeler la fonction pour faire avancer les escargots
	moveHawk(colorOne, colorTwo);

}






function moveHawk(firstColor, secondColor){

	
	var maxMovement = 900;
	
	// déplacement du premier lancer
	var hawkPositions = getHawkPosition();
	for ( let i = 0; i < hawkPositions.length; i++ ){
		
		if ( hawkPositions[i][0] == firstColor ){
			
			var NewPositionLeft = hawkPositions[i][1] + 40;
			document.getElementById("hawk-"+hawkPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft > maxMovement ) { gameWin(hawkPositions[i][0]); exit; }
			
		}
	}
	
		// déplacement du deuxieme lancer
	var hawkPositions = getHawkPosition();
	for ( let i = 0; i < hawkPositions.length; i++ ){
		
		if ( hawkPositions[i][0] == secondColor ){
			
			var NewPositionLeft = hawkPositions[i][1] + 30;
			document.getElementById("hawk-"+hawkPositions[i][0]).style.left = NewPositionLeft+'px';
			if ( NewPositionLeft > maxMovement ) gameWin(hawkPositions[i][0]);
			
		}
	}

}









function gameWin(winner){
	
	song();
	alert('Le Hawk '+ winner + ' a gagné !');
	resetGame();
	
}

function resetGame(){
	
	initDices();
	initHawk();
	repositionHawk();
	
}