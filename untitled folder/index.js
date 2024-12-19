var display = document.getElementById("input")
var buttons = document.querySelectorAll(".button")

function  handleClick(event){
 console.log("Hello");

}



function handleClick(event){
    let buttonClicked=event.target;
    if(!isNaN(buttonClicked.innerText)){
        display.innerText=buttonClicked.innerText
    }
           
        
}


   


for(let i=0;i <buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
} 
