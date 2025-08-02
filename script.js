function abrirCarta() {
  const envelope = document.querySelector('.envelope');
  const papel = document.getElementById('papel');

  if (!envelope.classList.contains('aberta')) {
    envelope.classList.add('aberta');
  }
}

