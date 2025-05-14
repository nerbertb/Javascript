numBottles = 99;


while (numBottles > 1) {

    
    console.log(numBottles + " bottles of beer on the wall, " + numBottles + " bottles of beer.\nTake one down and pass it around, " + (numBottles - 1) + " bottles of beer on the wall.");

    numBottles--;

    if (numBottles === 1) {
        
        console.log(numBottles + " bottle of beer on the wall, " + numBottles + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");

    numBottles--;

        if (numBottles === 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
        }
    } 
    


    
}



