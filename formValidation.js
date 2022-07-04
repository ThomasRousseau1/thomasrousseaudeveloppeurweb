//CONTACT FORM VALIDATION 
function displayForm() {
    const formContainer = document.querySelector(".contact");
    formContainer.insertAdjacentHTML( 
        "beforeend",
        `
        <form action="https://formsubmit.co/thomas.rousseaudev@outlook.fr" method="POST" class="contact__form">
            <div class="contact__firstContainer">
            <div>
                <h2>INFOS</h2>
                <div class="contact__infos">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <p>06 58 95 48 64</p>
                </div>
                <div class="contact__infos">
                    <i class="fa-solid fa-envelope"></i>
                    <p>thomas.rousseaudev1@gmail.com</p>
                </div>
                <div class="contact__infos">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Bétheny 51450</p>
                </div>
                </div>
                <div class="contact__socials">
                    <a href="https://www.linkedin.com/in/thomasrousseau1/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/ThomasRousseau1" target="_blank"><i class="fa-brands fa-github-square"></i></a>
                </div>
            </div>
            <div class="contact__secondContainer">
            <h2>UNE QUESTION ?</h2>
            <label>OBJET DE VOTRE DEMANDE*</label>
            <div class="contact__container">
            <select name="Demande" >
                <option value="Contact">Contact</option>
                <option value="Devis">Devis</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Autre">Autre</option>
            </select>
            </div>
            <label>NOM</label>
                <input type="nom" name="Nom" class="names">
            <label>PRÉNOM</label>
                <input type="prénom" name="Prénom" class="names">
            <label id="mail">MAIL*</label>
                <input type="email" name="Mail" class="mail">
            <label id="message">VOTRE MESSAGE*</label>
            <textarea name="Objet de la demande" class="textarea"></textarea>
            <button class="main__btn" type="submit">ENVOYER</button>
            </div>
        </form>
        `
    )
}
//REGEX 
const regExpNames = new RegExp(/^([A-Za-z]{3,20}-{0,1})?([A-Za-z]{3,20})$/)
const regExpEmail = new RegExp(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/)

// function validateNames() {
//     let names = document.querySelectorAll(".names");
//     console.log(names)
//     let validationInput = document.querySelector('.main__btn')
//     validationInput.addEventListener("click", () => {
//         if(!regExpNames.test(names.value)) {
//             alert('Veuillez entrer un prénom valide !')
//             names.focus;
//             return false;
//         }
//     })
// }

function validateMail() {
    let mail = document.querySelector(".mail");
    let validationInput = document.querySelector('.main__btn')
    let mailLabel = document.getElementById("mail")
    validationInput.addEventListener("click", () => {
         if(!regExpEmail.test(mail.value) || mail.value == null) {
            // alert('Veuillez entrer une adresse mail valide !')
            event.preventDefault();
            mailLabel.innerHTML = 'Veuillez entrer une adresse mail valide <i class="fa-solid fa-triangle-exclamation"></i>';
            mail.style.outline = '1.5px solid #CC3300';
            mail.focus;
            return false;
        }
    })
}

function validateMessage() {
    let validationInput = document.querySelector('.main__btn');
    let textArea = document.querySelector(".textarea");
    console.log(textArea)
    let textareaLabel = document.getElementById("message");
    validationInput.addEventListener("click", () => {
        if(textArea.value == '') {
            event.preventDefault();
            textareaLabel.innerHTML = 'Veuillez détailler votre demande <i class="fa-solid fa-triangle-exclamation"></i>';
            textArea.style.border = '1.5px solid #CC3300';
        }
    })
}

displayForm();
// validateNames();
validateMail();
validateMessage();
