
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')


botoesCarrosel.forEach((botao, indice) => {
   botao.addEventListener('click', () => {

      desativarBotaoSelecionado();

      selecionarBotaoCarossel(botao);

      esconderImagemAtiva();

      mostrarImagemDefundo(indice);
   })
})
function mostrarImagemDefundo(indice) {
   imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarossel(botao) {
   botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
   const imagemAtiva = document.querySelector('.ativa');
   imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
   const botaoSelecionado = document.querySelector('.selecionado');
   botaoSelecionado.classList.remove('selecionado');
}

