/* Criando o efeito de rolagem na navbar, para que quando rolar a tela a navbar mude o tamanho */
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 500);
})