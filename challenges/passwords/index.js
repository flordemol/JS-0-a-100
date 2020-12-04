fetch('psw.txt')
     .then(response => response.text())
     .then(text => {

        const passwords = [];
        passwords.push(text.split(/\n/));

        //console.log(passwords)
        
        let pass = [];
        passwords.map(password => {
            pass = password;
        })

        let passValidos = 0;
        pass.map(info => {
            const infoPass = info.split(/[\-:\s]/).filter(str => str !== "");
            const min = infoPass[0];
            const max = infoPass[1];
            const letra = infoPass[2];
            const passw = infoPass[3];
            let cont = 0;
            
            for (const l of passw) {
                if(l === letra){
                   cont++;
                }
            }
            if(cont >= min && cont <= max){
                passValidos++;
            }
        });
        //console.log(passValidos);

        const resp = document.getElementById('resp');
        resp.innerText = `Según nuestras políticas, ${passValidos} contraseñas son válidas.`;
        resp.style.background = "gray";
        resp.style.padding = "10px";
        resp.style.fontSize = "28px";
        resp.style.color = "white";
    });
        