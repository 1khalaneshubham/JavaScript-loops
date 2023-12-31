const fevMovie = "Avatar";
let guess = prompt("guess my favorite movie");
while((guess != fevMovie) && (guess != "quit")){
    guess = prompt(" wrong guess.Plz try again");
}
if(guess == fevMovie){
    console.log("Congrates");
}else{
    console.log("You quit");
}