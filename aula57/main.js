const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosPagina = getComputedStyle(document.body);
const corBackground = estilosPagina.backgroundColor;

for(let i = 0; i < ps.length; i++){
    ps[i].style.backgroundColor = corBackground;
    ps[i].style.color = 'white';
}