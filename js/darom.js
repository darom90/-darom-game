var khmerGame = () =>{
    let mix1 =Math.floor (Math.random() * 6)+ 1;
    let mix2 =Math.floor (Math.random() * 6)+ 1;
    let mix3 =Math.floor (Math.random() * 6)+ 1;
    let mix4 =Math.floor (Math.random() * 6)+ 1;
    let output ="";
   switch(mix1){
       case 1:
           output1 = "<img src='image/1.png' style='width:100px;'>";
           break;
        case 2:
            output1 = "<img src='image/2.png' style='width:100px;'>";
            break;
        case 3:
            output1 = "<img src='image/3.png' style='width:100px;'>";
            break;
        case 4:
           output1 = "<img src='image/4.png' style='width:100px;'>";
           break;
        case 5:
           output1 = "<img src='image/5.png' style='width:100px;'>";
           break;
       case 6:
           output1 = "<img src='image/6.png' style='width:100px;'>";
           break;
   }
   switch(mix2){
    case 1:
        output2 = "<img src='image/1.png' style='width:100px;'>";
        break;
     case 2:
         output2 = "<img src='image/2.png' style='width:100px;'>";
         break;
     case 3:
         output2 = "<img src='image/3.png' style='width:100px;'>";
         break;
     case 4:
        output2 = "<img src='image/4.png' style='width:100px;'>";
        break;
     case 5:
        output2 = "<img src='image/5.png' style='width:100px;'>";
        break;
    case 6:
        output2 = "<img src='image/6.png' style='width:100px;'>";
        break;
}
switch(mix3){
    case 1:
        output3 = "<img src='image/1.png' style='width:100px;'>";
        break;
     case 2:
         output3 = "<img src='image/2.png' style='width:100px;'>";
         break;
     case 3:
         output3 = "<img src='image/3.png' style='width:100px;'>";
         break;
     case 4:
        output3 = "<img src='image/4.png' style='width:100px;'>";
        break;
     case 5:
        output3 = "<img src='image/5.png' style='width:100px;'>";
        break;
    case 6:
        output3 = "<img src='image/6.png' style='width:100px;'>";
        break;
}
switch(mix4){
    case 1:
        output4 = "<img src='image/1.png' style='width:100px;'>";
        break;
     case 2:
         output4 = "<img src='image/2.png' style='width:100px;'>";
         break;
     case 3:
         output4 = "<img src='image/3.png' style='width:100px;'>";
         break;
     case 4:
        output4 = "<img src='image/4.png' style='width:100px;'>";
        break;
     case 5:
        output4 = "<img src='image/5.png' style='width:100px;'>";
        break;
    case 6:
        output4 = "<img src='image/6.png' style='width:100px;'>";
        break;
}
   let result = document.getElementById("result");
   setTimeout(( )=>{
    result.innerHTML = output + output2 + output3 + output4;
   },100);
  
}


var playAgain = () => {
    let result = document.getElementById("result");
    result.innerHTML = "";
}
var clear = document.getElementById("clear");
clear.addEventListener('click',playAgain);

var playGame = document.getElementById("play");
playGame.addEventListener('click', khmerGame);


var changeColor = () => document.body.style.background = document.body.style.background == "teal" ? "red" : "teal";
setInterval(changeColor,2000);




