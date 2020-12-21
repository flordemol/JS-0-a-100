const URL = 'puzzleInput.txt';
let lotes = [];
const camposObligatorios = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort();

// Traer datos del txt
const fetchLotes = async (url = URL) => {   
   try { 
       const response = await fetch(url, {method: 'GET'})
       return await response.text()
   } catch (err){
        console.error(err);
   }
}

const datosFormateados = (data) => {
    // Separar lotes
    lotes.push(data.split(/\r\n\r/));

    // Cantidad de lotes
    console.log(`Hay ${lotes[0].length} cantidad de lotes`)

    lotes = lotes[0];

    // Separar campos
    const totalLotes = lotes.map(lote => lote.trim().split(/\s/).filter(str => str !== ""));
    //console.log(totalLotes)

    const pasaportes = totalLotes.map(lote => {
        const campos = lote.map(campo => {
            return campo.split(/[\-:\s]/)[0]
        })
        return campos;
    })
    //console.log(pasaportes);
    
    // Excluir CID por ser opcional
    return pasaportes.map(pas => pas.filter(pas => pas !== "cid").sort());
}

const pasaportesValidos = (lotesFormateados) => {
    let contValidos = 0;
    lotesFormateados.forEach(lote => {
      
      if(String(lote) === String(camposObligatorios)){
          contValidos++
      }
    });

    console.log(contValidos)
    imprimirRta(contValidos);
}

const imprimirRta = (contValidos) => {
    const rta = document.getElementById('respuesta');
    rta.innerHTML = `De los ${lotes.length} lotes, solo ${contValidos} son válidos`;
    rta.style.fontSize = '25px';
    rta.style.background = "aquamarine";
}

const start = async () => {
    const data = await fetchLotes();
    const lotesFormateados = datosFormateados(data);
    pasaportesValidos(lotesFormateados); 
}

window.onload = start();