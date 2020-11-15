const restarVectores = (array1, array2) => {
    const nuevoArray = [];
    let repetido = false;

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
                repetido = true;
                console.log(array1[i] + " está repetido");
                break;
            } else {
                repetido = false;
            };
        };
        if(repetido === false){
            nuevoArray.push(array1[i])
            console.log(array1[i] + " push!")
        };
    };
    return nuevoArray;
};