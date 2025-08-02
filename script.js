window.addEventListener("load", () => {
  const texto = `
    Minha doce Lorena,

    Mesmo que os ventos da vida tenham nos levado por caminhos diferentes,
    meu amor por você continua firme como uma estrela que nunca apaga.

    Eu sigo esperando, com o coração leve e sorriso no rosto,
    pelo dia em que você volte a me amar... e quem sabe, a gente se case.

    Até lá, sigo sonhando com a gente,
    torcendo pra que o destino ainda nos reserve um final feliz.

    Com carinho infinito,
    Seu eterno apaixonado 💌
  `;

  const textoCarta = document.getElementById("textoCarta");
  setTimeout(() => {
    textoCarta.textContent = texto;
    textoCarta.style.opacity = 1;
  }, 3000); // espera animação da carta abrir

  // Efeito de corações subindo
  const coracoes = document.getElementById("coracoes");
  setInterval(() => {
    const cor = document.createElement("div");
    cor.className = "coracao";
    cor.textContent = "❤️";
    cor.style.left = Math.random() * 100 + "vw";
    coracoes.appendChild(cor);
    setTimeout(() => cor.remove(), 4000);
  }, 500);
});
