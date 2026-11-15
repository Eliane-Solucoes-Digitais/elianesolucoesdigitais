
/* =================================
   ELIANE | SOLUÇÕES DIGITAIS
   INTERATIVIDADE DO SITE
================================= */

document.addEventListener("DOMContentLoaded", function () {

  // Navegação suave pelos links do menu
  const menuLinks = document.querySelectorAll('nav a[href^="#"]');

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Efeito de destaque no cabeçalho durante a rolagem
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 40);
    }
  });

  // Atualização automática do ano no rodapé
  const footer = document.querySelector("footer");

  if (footer) {
    const year = document.createElement("p");
    year.className = "copyright";
    year.textContent = "© " + new Date().getFullYear() +
      " Eliane | Soluções Digitais. Todos os direitos reservados.";

    footer.querySelector(".container").appendChild(year);
  }

});

