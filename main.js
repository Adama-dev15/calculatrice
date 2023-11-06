
/* window.addEventListener('DOMContentLoaded', (e)=>{
    let numberButtons = document.querySelectorAll('.cal_button');
    numberButtons.forEach((number)=>{
        number.addEventListener("click", (e)=>{
            console.log(number.textContent)
        })
    })
}) */

window.addEventListener('DOMContentLoaded', (e)=>{

    let numberButtons = document.querySelectorAll('.cal_button');
    let champOperation = document.getElementById('resultat');
    let operationButton = document.getElementById('operation');
    let buttonVider = document.getElementById('videChamp');

    numberButtons.forEach((number)=>{

        number.addEventListener("click", (e)=>{
            let valeurs = number.textContent;

            let point = champOperation.value;

            let lastValue = point[ point.length - 1 ];
            if ((lastValue === '.' && number.textContent === '.')
            || (lastValue === '*' && number.textContent === '*')
            || (lastValue === '+' && number.textContent === '+')
            || (lastValue === '/' && number.textContent === '/') 
            || (lastValue === '-' && number.textContent === '-')) { 
                return;  
            }else{
                let opera = champOperation.value +=valeurs;
                operationButton.addEventListener('click', ()=>{
                    if (opera == 0) {
                        champOperation.value = "pas d'operation";
                    }else{
                        champOperation.value = eval(opera);
                    }
                })
            }

            buttonVider.addEventListener('click', ()=>{
                champOperation.value = "";
            })
        })
    })
})