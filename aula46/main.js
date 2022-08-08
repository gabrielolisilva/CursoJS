function formatarData (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = formatarData(data.getDate());
    const mes = formatarData(data.getMonth() + 1);
    const ano = formatarData(data.getFullYear());
    const hora = formatarData(data.getHours());
    const min = formatarData(data.getMinutes());
    const seg = formatarData(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)