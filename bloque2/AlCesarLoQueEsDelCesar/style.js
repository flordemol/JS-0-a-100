const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const cifrar = (texto, num) => {
    const indices = [];
    const nuevosIndices = [];
    let textocifrado = "";

    // obtener indices de las letras ingresadas
    for (let i = 0; i < texto.length; i++) {
        let letra = letras.indexOf(texto[i].toLowerCase());
        indices.push(letra);
    };
    console.log("indices: " + indices);
    
    // obtener array con nuevos indices para codificar
    for (let i = 0; i < indices.length; i++) {
        let nuevoIndice = indices[i];
        for (let j = 0; j < num; j++) {
            nuevoIndice++;
            nuevoIndice > 26 ? nuevoIndice = 0 : null;
        };
        nuevosIndices.push(nuevoIndice);
    };
    console.log("nuevosIndices: " + nuevosIndices);
    
    // obtener nuevo texto cifrado
    for (let i = 0; i < nuevosIndices.length; i++) {
        textocifrado += letras[nuevosIndices[i]];
    };
    return textocifrado.toUpperCase();
}