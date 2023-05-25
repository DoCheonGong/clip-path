const section = document.querySelector("section");
const txt = document.querySelector(".txt");
const innertxt = document.querySelector(".innertxt");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    section.style.clipPath = `circle(${scroll}px at center center)`;
    txt.style.left = 100 - scroll / 5 + "%";
    innertxt.style.left = 100 - scroll / 5 + "%";
})