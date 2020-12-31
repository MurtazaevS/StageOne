/*A game BattleShip*/
//присвоение пременных
var location1=3;//дляхраненияпозициикаждойклеткикорабля
var location2=4;
var location3=5;
var guess=;//номертекущейпопытки
var hits=0;//количествопопаданий
var guesses=0;//количествопопыток 
var isSunk=false;//дляхраненияинформацииопотоплениикорабля
 while(isSunk==false){
 	guess=prompt("Готовься, целься, стреляй! (напишите 0-6 чисел.)");//prompt-всплывающееполедляввода
 	if(guess<0||guess>6){
 	alert("Please enter a valid cell Number")
 	}else{
 		guess=guess+1;
 	}if(guess==location1){
 		hits=hits+1;
 	}if(guess==location2){
 		hits=hits+1;
 	}if(guess==location3){
 		hits=hits+1;
 	}
 }