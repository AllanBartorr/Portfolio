var button = document.getElementById('button');

button.addEventListener('mouseenter', entrar);
button.addEventListener('click', clicar);
button.addEventListener('mouseout', sair);

function clicar(){
    button.style.background = 'red';
}

function entrar(){
    button.style.background = 'black';
}
function sair(){
    button.style.background = '#555'
}