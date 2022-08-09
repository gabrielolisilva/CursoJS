function meuEscopo(){
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay();
    const diaMes = dataAtual.getDate();
    const Mes = dataAtual.getMonth();
    const Ano = dataAtual.getFullYear();
    const Hora = dataAtual.getHours();
    const Minuto = dataAtual.getMinutes();

    function textoDiaSemana (valorSemana){
        switch(valorSemana){
            case 0:
            valorSemana = 'Domingo'
            return valorSemana;
            case 1:
            valorSemana = 'Segunda-feira'
            return valorSemana;
            case 2:
            valorSemana = 'Terça-feira'
            return valorSemana;
            case 3:
            valorSemana = 'Quarta-feira'
            return valorSemana;
            case 4:
            valorSemana = 'Quinta-feira'
            return valorSemana;
            case 5:
            valorSemana = 'Sexta-feira'
            return valorSemana;
            case 6:
            valorSemana = 'Sábado'
            return valorSemana;
        }
    }

    function textoMesdoAno (valorMes){
        switch(valorMes){
            case 0:
            valorMes = 'Janeiro'
            return valorMes;
            case 1:
            valorMes = 'Fevereiro'
            return valorMes;
            case 2:
            valorMes = 'Março'
            return valorMes;
            case 3:
            valorMes = 'Abril'
            return valorMes;
            case 4:
            valorMes = 'Maio'
            return valorMes;
            case 5:
            valorMes = 'Junho'
            return valorMes;
            case 6:
            valorMes = 'Julho'
            return valorMes;
            case 7:
            valorMes = 'Agosto'
            return valorMes;
            case 8:
            valorMes = 'Setembro'
            return valorMes;
            case 9:
            valorMes = 'Outubro'
            return valorMes;
            case 10:
            valorMes = 'Novembro'
            return valorMes;
            case 11:
            valorMes = 'Dezembro'
            return valorMes;
        }

    }
    let txtDiaSemana = textoDiaSemana (diaSemana);
    let valorDoMes = textoMesdoAno(Mes);

    const textoMudado = document.querySelector('h1');
    textoMudado.innerHTML = `${txtDiaSemana}, ${diaMes} de ${valorDoMes} de ${Ano} <br> ${Hora}:${Minuto}`
}
meuEscopo();







