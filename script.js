function abrirCarta() {
  document.querySelector(".tampa").style.transform = "rotateX(-120deg)";
  document.querySelector(".mensagem").style.display = "block";
  setTimeout(() => {
    document.querySelector(".carta").style.opacity = 1;
  }, 1000);
  setInterval(criarCoracao, 1000);
}

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coração');
  coracao.innerText = '❤';
  coracao.style.left = Math.random() * window.innerWidth + 'px';
  coracao.style.top = window.innerHeight + 'px';
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}
