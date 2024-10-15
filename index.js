let score1=0
let score2=0
scoreEl = document.getElementsByClassName("score1")[0]
function scores() {
	score1 += 1;
	scoreEl.textContent = score1; 
}
function scores2() {
	score1 += 2;
	scoreEl.textContent = score1; 
}
function scores3() {
	score1 += 3;
	scoreEl.textContent = score1; 
}
scoreEl2 = document.getElementsByClassName("score2")[0]
function scores4() {
	score2 += 1;
	scoreEl2.textContent = score2; 
}
function scores5() {
	score2 += 2;
	scoreEl2.textContent = score2; 
}
function scores6() {
	score2 += 3;
	scoreEl2.textContent = score2; 
}
winnertags = document.getElementById("winnertag")
function reset() {
	let score1 = 0
	let score2 = 0
	scoreEl.textContent = score1;
	scoreEl2.textContent = score2; 
	if (score1 === score2) {
        winnertags.textContent = "It's a tie!"
		}
	else if (score1 > score2){
		winnertags.textContent = "Winner is Home!"
	    }
		else {
		winnertags.textContent = "Winner is Guest!"
		}
		  
}
	
