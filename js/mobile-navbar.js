class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);

    this.isMobile = false; // Indica se está na versão móvel

    this.checkIfMobile(); // Verifica se é a versão móvel ou desktop
  }

  checkIfMobile() {
    const mobileBreakpoint = 768; // Defina o ponto de quebra para a versão móvel

    if (window.innerWidth <= mobileBreakpoint) {
      this.isMobile = true;
    }
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleNavLinkClick);
    });
  }

  handleNavLinkClick() {
    this.ocultar();
  }

  ocultar() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
  }

  Init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li a"
);
mobileNavbar.Init();


//faz a rolagem suave da página e evita que a tele role além do menu
const linksAncora = document.querySelectorAll('a[href^="#"]');

linksAncora.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const destino = document.querySelector(link.getAttribute("href"));

    if (destino) {
      const offset = 60; // Ajuste o valor conforme necessário para o espaçamento superior desejado
      const topPos = destino.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
  });
});

/*ocultar icone whatssap ao abrir o menu também torna visível ao clicar em qualquer item do menu ou tornar o menu para dentro*/
function OcultarZap() {
  var ocultarzap = document.getElementById("zap-mobile");
  if (ocultarzap.style.display === "none") { // compara se o elemento tem o display none 
    ocultarzap.style.display = ""; // Define o valor padrão do elemento
  } else {
    ocultarzap.style.display = "none";
  }
}
