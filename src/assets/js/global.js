const elementsDataAnimation = document.querySelectorAll("[data-animation]");
const aboutSection = document.getElementById("about");

// Enum de animações
const AnimationTypes = {
  LEFT: "left",
  RIGHT: "right",
  SPEEDRIGHT: "speed-right",
};

// Função que aplica animação de Slide (para os tipos left e right)
function applySlideAnimation(element, type) {
  if (element.getBoundingClientRect().top < window.innerHeight * 0.7) {
    // Adiciona a classe de animação correta dependendo da direção
    if (type === AnimationTypes.LEFT) {
      element.classList.add("animate__fadeInLeft");
    } else if (type === AnimationTypes.RIGHT) {
      element.classList.add("animate__fadeInRight");
    } else if (type === AnimationTypes.SPEEDRIGHT) {
      element.classList.add("animate__lightSpeedInRight");
    }
  } else {
    // Remove a classe de animação quando o elemento sair da tela
    element.classList.remove("animate__fadeInLeft", "animate__fadeInRight", "animate__lightSpeedInRight");
  }
}

// Função central que aplica a animação de acordo com o tipo
function applyAnimation(element, type) {
  switch (type) {
    case AnimationTypes.LEFT:
    case AnimationTypes.RIGHT:
    case AnimationTypes.SPEEDRIGHT:
      applySlideAnimation(element, type);
      break;
    default:
      console.warn("Tipo de animação desconhecido:", type);
  }
}

// Animação de Scroll para Left e Right
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-animation]").forEach((element) => {
    applyAnimation(element, element.dataset.animation); 
  });
});
