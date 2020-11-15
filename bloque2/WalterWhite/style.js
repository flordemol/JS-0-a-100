const cantEspaciosBlancos = (texto) => {
    let vacios = 0;
    
    for (let i = 0; i < texto.length; i++) {
       texto[i] === " " ? vacios++ : null;
    };
    return vacios;
};