function startSlide() {
  // Esconde o botão inicial
  document.getElementById('start-btn').style.display = 'none';
  document.body.style.backgroundImage = "linear-gradient(135deg, #ff6b81, #ff4757)";

  // Exibe a imagem com efeito
  const imageContainer = document.getElementById("image-container");
  const image = document.getElementById("image");

  imageContainer.style.display = "block";
  image.style.transform = "scale(1)";

  // Exibe o botão de carta após 2 segundos
  setTimeout(function () {
    document.getElementById("letter-button").style.display = "block";
  }, 2000);

  // Reproduz a música
  const music = document.getElementById("music");
  music.play();
}

function openLetter() {
  // Exibe a carta com animação
  document.getElementById("letter-content").style.display = "block";
  document.getElementById("letter-button").style.display = "none";
  
  // Esconde a imagem após clicar na carta
  document.getElementById("image-container").style.display = "none";

  setTimeout(function () {
    document.getElementById("letter-content").style.opacity = "1";
    document.getElementById("letter-content").style.transform = "scale(1)";
  }, 500);
}
