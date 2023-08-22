let gameSeq = [];
let userSeq = [];

let btns = ["red","violet","blue","orange"]

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener("keypress",function (){
    if(started == false){
        console.log('Game started');
        started = true;

        levelup();
       
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash")
    },250)
}

function levelup(){
    userSeq = [];
   level++;
   h3.innerText = `level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
   btnFlash(randBtn);
}

function checkAns(idx){
   
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelup,1000);
    }
   }else{
    h3.innerHTML = `Game over! your score was <b> ${level}</b> <br> 
    Press any key to Restart the Game `;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "white";  
    },200);
    reset();
   }
}

function btnPress(){
  let btn =this
  btnFlash(btn);

  userColor = btn.getAttribute("id");
 
 userSeq.push(userColor);
  console.log(userSeq)
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
    
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level = 0;
}