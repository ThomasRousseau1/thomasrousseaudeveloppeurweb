//Burger Menu
let mobileNav = document.getElementById('burgerNav')
let openBtn = document.getElementById('open-btn')
let closeBtn = document.getElementById('close-btn')
let links = document.querySelectorAll('.header__navlinks')

openBtn.onclick = openNav
closeBtn.onclick = closeNav

function openNav() {
    mobileNav.classList.add('active')
}

function closeNav() {
    mobileNav.classList.remove('active')
}

//Fermer navbar quand on clique ailleurs
  mobileNav.addEventListener('click', function(event) {
    if(event.target != links) {
      closeNav()
    }
  })

