function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coração');
  coracao.innerText = '❤';
  coracao.style.left = Math.random() * window.innerWidth + 'px';
  coracao.style.top = '100%';
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 800);
