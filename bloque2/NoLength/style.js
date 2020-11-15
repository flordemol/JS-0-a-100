const cantCaractConLength = (texto) => texto.length;

const cantCaractSinLength = (texto) => {
    let cantidad = 0;
    const arrayTxt = texto.split("");
    for (let i = 0; i < arrayTxt.length; i++) {
       cantidad ++;
    }
    return cantidad;
};