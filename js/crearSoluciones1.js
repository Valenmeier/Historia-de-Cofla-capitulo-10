const sendButton=document.querySelector(`#snd-nota`);
sendButton.addEventListener(`click`,()=> {
    let resultado,mensaje;
    try{
        prevRes=parseInt(document.querySelector(`#nota-alumno`).value);
        if(isNaN(prevRes)||prevRes>10||prevRes<0) {
            throw `gracioso`;
        }    
        
        mensaje = definirMensaje(prevRes);  
        resultado=verificarAprobacion(8,5,prevRes);

    }catch(e) {
         resultado=`¿Sos gracioso?`
         mensaje=`He descubierto que intentaste hackear el sitio`
    }
    abrirModal(resultado,mensaje)
})

const definirMensaje=(pr)=> {
    let resultado;
    switch (pr) {
        case 0: resultado=`Resultado de examen = 0`;
        break
        case 1: resultado=`Resultado de examen = 1`;
        break
        case 2: resultado=`Resultado de examen = 2`;
        break
        case 3: resultado=`Resultado de examen = 3`;
        break
        case 4: resultado=`Resultado de examen = 4`;
        break
        case 5: resultado=`Resultado de examen = 5`;
        break
        case 6: resultado=`Resultado de examen = 6`;
        break
        case 7: resultado=`Resultado de examen = 7`;
        break
        case 8: resultado=`Resultado de examen = 8`;
        break
        case 9: resultado=`Resultado de examen = 9`;
        break
        case 10: resultado=`Resultado de examen = 10`;
        break
        default:resultado=null;
    }
    return resultado
}
const verificarAprobacion=(nota1,nota2,prevRes)=> {
    let promedio= (nota1+nota2+prevRes)/ 3;
    if(promedio>=6){
        return `<span class="green">MATERIA APROBADA</span>`
    }
    return `<span class="red">MATERIA DESAPROBADA</span>`
}
const abrirModal=(res,msg)=> {
    document.querySelector(`.resultado`).innerHTML=res;
    document.querySelector(`.mensaje`).innerHTML=msg;
    let modal=document.querySelector(`.modal-background`);
    modal.style.display=`flex`
    modal.style.animation=`aparecer 1s forwards`
    modal.addEventListener(`click`,()=> {
        modal.style.animation=`desaparecer .5s forwards`
        setTimeout(()=> {
            modal.style.display=`none`
        },500)
    })
}
