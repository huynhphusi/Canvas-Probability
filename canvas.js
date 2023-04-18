const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height= innerHeight;

const colors = ['red','blue','magenta','green','purple','brown'];
const image = new Image();
image.src = "dice.jpg";

let rdDice = [0,0,0,0,0,0];
let rdSum  = 0;

function RandInt(min,max){
    return Math.floor(min+Math.random()*(max-min+1));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    rdSum += 1;
    let rdNum = RandInt(1,6);
    if(rdNum==1){rdDice[0]=rdDice[0]+1;}
    if(rdNum==2){rdDice[1]=rdDice[1]+1;}
    if(rdNum==3){rdDice[2]=rdDice[2]+1;}
    if(rdNum==4){rdDice[3]=rdDice[3]+1;}
    if(rdNum==5){rdDice[4]=rdDice[4]+1;}
    if(rdNum==6){rdDice[5]=rdDice[5]+1;}

    for (var j=1;j<=6;j++){
        c.beginPath();
        if(j==1){
            c.drawImage(image,4,0,170,170,5,50*j-25,40,40);
        }
        if(j==2){
            c.drawImage(image,164,0,170,170,5,50*j-25,40,40);
        }
        if(j==3){
            c.drawImage(image,326,0,170,170,5,50*j-25,40,40);
        }
        if(j==4){
            c.drawImage(image,4,170,170,170,5,50*j-25,40,40);
        }
        if(j==5){
            c.drawImage(image,164,170,170,170,5,50*j-25,40,40);
        }
        if(j==6){
            c.drawImage(image,326,170,170,170,5,50*j-25,40,40);
        }
        c.fillStyle = colors[j-1];
        c.font = "20px Arial";
        c.fillText(rdDice[j-1]+" ("+(rdDice[j-1]/rdSum).toFixed(5)+")", 55, 50*j+6);
        c.fillRect(210,50*j-10,canvas.width*2*rdDice[j-1]/rdSum,20);
        c.closePath();
    }
}

animate();