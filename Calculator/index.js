let screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 let screenValue='';
 for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText; //screenValue is a variable
            screen.value += buttonText; //screen.value is value of screen
        }

        else if(buttonText=='C'){
            screenValue = " ";
            screen.value = " ";
        }

        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }

        else{
            screenValue += buttonText ;
            screen.value = screenValue; 
        }
    })
 }