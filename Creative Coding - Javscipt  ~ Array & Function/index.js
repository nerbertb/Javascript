

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';


context.lineWidth = 4;
// context.beginPath();


// context.arc(300, 300, 200, 0, Math.PI*2);
// context.stroke();


// context.fillRect    (100, 100, 400, 400);

context.beginPath();
context.rect(100, 100, 400, 400);
// context.stroke();




for (let i = 0;i < 5; i++) {
    
    for (let j = 0;j < 5; j++) {
        
        let width = 40;
        let height = 40;
        let gap = 20;
        let x = 100 + (width + gap)  * i;
        let y = 100 + (height + gap) * j;


        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        context.beginPath();
        context.rect(x + 8,y + 8,width - 16,height - 16)
        context.stroke();
     }
    

}
