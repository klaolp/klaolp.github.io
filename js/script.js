
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-navegacao");

function fecharMenu() {
    menu.classList.remove("ativo");
    menuToggle.classList.remove("ativo");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("ativo");

    menuToggle.classList.toggle("ativo", aberto);

    menuToggle.setAttribute(
        "aria-expanded",
        String(aberto)
    );

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// FECHAR AO CLICAR EM UM LINK

document.querySelectorAll(".menu-navegacao a")
    .forEach(link => {
        link.addEventListener("click", fecharMenu);
    });

// FECHAR COM ESC

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});

// FECHAR QUANDO VOLTAR AO DESKTOP

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        fecharMenu();
    }
});
