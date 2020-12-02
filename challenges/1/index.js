fetch('/arrays.txt')
.then(res => res.text())
.then(infoDeGastos => {
    const entradas = [];
    entradas.push(infoDeGastos.split(/\n/));
    //console.log(entradas[0]);
    
    const btn = document.getElementById('btn');
    const numeros = document.getElementById('numeros');
    const respuesta = document.getElementById('respuesta');
    btn.addEventListener('click', calcular);

    function calcular(){
        let num1 = undefined;
        let num2 = undefined;
        const resSuma = 2020;
    
        for (let i = 0; i < entradas[0].length; i++) {
            
            num1 = entradas[0][i];
            
            for (let j = 0; j < entradas[0].length; j++) {
                if(i !== j){
                    num2 = entradas[0][j];
    
                    if((parseFloat(num1) + parseFloat(num2)) === resSuma){
                        numeros.innerHTML = `${num1} y ${num2}`;
                        respuesta.innerHTML = parseFloat(num1) * parseFloat(num2);
                    }
                }               
            }
        }
    }
});

