const cargarNumeros = (numero) => {
    const numeros = [];
    for (let i = 0; i < numero; i++) {
       const num = parseInt(prompt("Ingresá un número entero"));
       numeros.push(num);        
    };
    return numeros;
};

const suma = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    };
    return suma;
};