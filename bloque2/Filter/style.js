const distintos = (array) => {
    const nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
      !nuevoArray.includes(array[i]) ? nuevoArray.push(array[i]) : null;
    };
    return nuevoArray;
};