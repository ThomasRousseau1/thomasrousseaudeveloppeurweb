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