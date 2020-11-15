const agregarMayusculas = (texto) => {
    const palabras = texto.split(" ");
    const palabrasFormateado = [];
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        for (let j = 0; j < palabra.length; j++) {
            palabrasFormateado.push(palabra[0].toUpperCase() + palabra.slice(1));
            break;
        };
    };
    return palabrasFormateado.join(" ");
};