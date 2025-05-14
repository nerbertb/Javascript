var  output = [];
var i = 1;


function fizzBuzz(){
    
    while (i <= 100) {
        
    let three = (i % 3);
    let five = (i % 5);

    
    
    
        if (three === 0 && five === 0){
            output.push("FizzBuzz");
        }     
        else if (three === 0){
            output.push("Fizz");
        } 
        else if (five === 0){
            output.push("Buzz");
        } 
        else {
            output.push(i);
        }

    i++;
    
    }

    
     console.log(output);
}

fizzBuzz();