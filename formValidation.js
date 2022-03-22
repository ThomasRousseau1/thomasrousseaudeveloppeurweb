//CONTACT FORM VALIDATION 
function displayForm() {
    const formContainer = document.querySelector(".contact");
    formContainer.insertAdjacentHTML( 
        "beforeend",
        `
        <img src="ressources/bekky-bekks-gk-2lMtCeR8-unsplash.jpg" class="contact__img">
        <form action="https://formsubmit.co/thomas.rousseaudev@outlook.fr" method="POST" class="contact__form">
            <div class="contact__titles">
                <h2>VOUS SOUHAITEZ ÉCHANGER ET PARTAGER VOS ENVIES ?</h2>
                <p>CE FORMULAIRE SERA NOTRE POINT DE DÉPART.</p>
            </div>
            <div>
                <div class="contact__infos">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <p>06 58 95 48 64</p>
                </div>
                <div class="contact__infos">
                    <i class="fa-solid fa-envelope"></i>
                    <p>thomas.rousseaudev@outlook.fr</p>
                </div>
            </div>
            <label>OBJET DE VOTRE DEMANDE*</label>
            <select name="Demande" >
                <option value="Contact">Contact</option>
                <option value="Devis">Devis</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Autre">Autre</option>
            </select>
            <label>NOM</label>
            <div class="contact__container">
                <i class="fa-solid fa-user"></i>
                <input type="nom" name="Nom" class="names">
            </div>
            <label>PRÉNOM</label>
            <div class="contact__container">
                <i class="fa-solid fa-user"></i>
                <input type="prénom" name="Prénom" class="names">
            </div>
            <label id="mail">MAIL*</label>
            <div class="contact__container">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" name="Mail" class="mail">
            </div>
            <label id="message">VOTRE MESSAGE*</label>
            <textarea name="Objet de la demande" class="textarea"></textarea>
            <a href="" class="main__btn">ENVOYER</a>
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
            mailLabel.innerHTML = 'MAIL: Veuillez entrer une adresse mail valide <i class="fa-solid fa-triangle-exclamation"></i>';
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
            textareaLabel.innerHTML = 'VOTRE MESSAGE : Veuillez détailler votre demande <i class="fa-solid fa-triangle-exclamation"></i>';
            textArea.style.border = '1.5px solid #CC3300';
        }
    })
}

displayForm();
// validateNames();
validateMail();
validateMessage();
