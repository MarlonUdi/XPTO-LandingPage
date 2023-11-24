// Quando clicar na seta pra avanlar temos que esconder todas as imagens e mostrar a próxima imagem

//    A imagem atual começa em 0 zero porque a primeira imagem assim que for clicado no avançar eu preciso adicionar +1 ao contador de imagens pra poder saber que agora vou mostrar a segunda imagem.

// Esconder todas as imgens
//Pegar todas as as imgens usando o DOM e remover a classe mostrar

// mostrar a próxima imagem
// pegar todas as imagens, descobrir qual a próxima imagem e colocar a classe mostrar nela

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}
function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        alert('Fim das imagens');//incluido alerta ao fim das apresentações das imagens
        return;
    }
    imagemAtual++;
    esconderImagens();
    mostrarImagem();
});


setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        alert('Primeira imagem')//incluido alerta ao fim das apresentações das imagens
        return;
    }
    imagemAtual--;

    esconderImagens();
    mostrarImagem();
});