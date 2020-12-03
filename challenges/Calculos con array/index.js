fetch('/arrays.txt')
.then(res => res.text())
.then(infoDeGastos => {
    const entradas = [];
    entradas.push(infoDeGastos.split(/\n/));
    //console.log(entradas[0]);
    
    const btnSuma2 = document.getElementById('btnSuma2');
    const numeros1 = document.getElementById('numeros1');
    const respuesta1 = document.getElementById('respuesta1');
    btnSuma2.addEventListener('click', calcularSuma2);
    const btnSuma3 = document.getElementById('btnSuma3');
    const numeros2 = document.getElementById('numeros2');
    btnSuma3.addEventListener('click', calcularSuma3);

    function calcularSuma2(){
        let num1 = undefined;
        let num2 = undefined;
        const resSuma = 2020;
        let encontrado = false;
    
        for (let i = 0; i < entradas[0].length; i++) {
            
            num1 = entradas[0][i];
            
            for (let j = 0; j < entradas[0].length; j++) {
                if(i !== j){
                    num2 = entradas[0][j];
    
                    if((parseFloat(num1) + parseFloat(num2)) === resSuma){
                        numeros1.innerHTML = `${num1} y ${num2}`;
                        respuesta1.innerHTML = parseFloat(num1) * parseFloat(num2);
                        encontrado = true;
                    }
                } 
                if(encontrado === true) {
                    break ;
                }          
            }
        }
    }

    function calcularSuma3(){
        let num1 = undefined;
        const resSuma = 2020;
        let encontrado = false;
    
        for (let i = 0; i < entradas[0].length; i++) {
            
            num1 = entradas[0][i];
            
            for (let j = 0; j < entradas[0].length; j++) {
                if(i !== j){
    
                    for (let k = 0; k < entradas[0].length; k++) {
                        if(i !== j && i !== k){
                                          
                        if((parseFloat(num1) + parseFloat(entradas[0][j]) + parseFloat(entradas[0][k])) === resSuma){
                            numeros2.innerHTML = `${num1}, ${entradas[0][j]} y ${entradas[0][k]} `;
                            encontrado = true;
                        }
                    } 
                    if(encontrado === true) {
                        break ;
                    }          
                }
                }
            }
        }
    }
});

