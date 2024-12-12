let score=0;
let ScoreCont = document.querySelector("#scoreCont");
document.onkeydown = (e)=>{
    console.log("key code is:", e.keyCode);
    if(e.keyCode==38){
         pika = document.querySelector(".pika");
        pika.classList.add('animatePika');
        setTimeout(()=>{
            pika.classList.remove('animatePika');
        },700);
    }
    if(e.keyCode==39){
        pika = document.querySelector(".pika");
        pikaX = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
        pika.style.left = pikaX+112+"px";
    }
    if(e.keyCode==37){
        pika = document.querySelector(".pika");
        pikaX = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
        pika.style.left = pikaX-112+"px";
    }
    
}

setInterval(()=>{
     pika = document.querySelector('.pika');
     gameOver = document.querySelector('.gameOver');
     obstacale = document.querySelector('.obstacale');
    px = parseInt(window.getComputedStyle(pika,null).getPropertyValue('left'));
    py =parseInt( window.getComputedStyle(pika,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacale,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacale,null).getPropertyValue('top'));

    offsetX= Math.abs(px-ox);
    offsetY= Math.abs(py-oy);
    console.log(offsetX ,offsetY);
    if(offsetX< 52 && offsetY< 30){
        gameOver.style.visibility = 'visible';
    obstacale.classList.remove('obstacaleAni')
    } 
    else{
        score +=1;
        updateScore(score);
    }
},100);
function updateScore(){
    ScoreCont.innerHtml ="Your Score: "+ score;
}


