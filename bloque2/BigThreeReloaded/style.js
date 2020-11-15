const cargarNumeros = (numero) => {
    const numeros = [];
    for (let i = 0; i < numero; i++) {
       const num = parseInt(prompt("Ingresá un número entero"));
       numeros.push(num);        
    };
    return numeros;
};

const numMayor = (numeros) => {
    let max = -999999999999;
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] > max ? max=numeros[i] : null;
   }
   return max;
};