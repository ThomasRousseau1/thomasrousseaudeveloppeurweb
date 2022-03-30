//BURGER MENU
let burger = document.querySelector(".burger");
let header = document.querySelector(".header");
burger.addEventListener("click", () => {
    const burgerMenuContainer = document.querySelector(".burger__menu");
    burgerMenuContainer.insertAdjacentHTML(
        "beforeend",
        `
        <div class="burger__menu">
        <a href="index.html">Accueil</a>
        <a href="creation-de-sites.html">Création de sites</a>
        <a href="realisations.html">Réalisations</a>
        <a href="contact.html">Contact</a>
        </div>
        `
    )
})

//CREATION DE SITES
const apparitionImages = document.querySelectorAll(".offer__img");

let options = {
    rootMargin: "-10% 0px",
    threshold: 0
}

function handleIntersect(entries) {
    console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    })
}

const observer = new IntersectionObserver
(handleIntersect, options)

apparitionImages.forEach(apparitionImage => {
    observer.observe(apparitionImage)
})