//chargement du DOM
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded")
})
//récupérer les éléments d'analogies.json avec fetch pour avoir les  analogies, valeursAnalogies, explications, et images
//mettre chaque analogie dans chaque section
fetch('analogies.json').then(function(response) { 
    response.json().then(function(data){ 
        console.log(data);
        var numCase = 0;
        var sections = document.querySelectorAll('.section');

        data.forEach(function (element) {
            console.log("Si j'étais " + element);
            sections[numCase].innerHTML += " <img class=\"image\" src=" + element.images + "> <span class=\"custom-span\"> Si j'étais " + element.analogies + ", je serais " + element.valeursAnalogies + "</span>" + "<p class=\"texte\">" + element.explications + "</p>";
            numCase++;
        }) 
    }) 
});

 //récupérer les données du formulaire avec les id en html (je n'ai pas réussi à continuer ce code)
//var inputs = document.querySelectorAll('#analogie,#valeurAnalogie')
//inputs.forEach(function(input){
    //input.addEventListener('keyup',function(event){
        //console.log(input.value)
    //})
    
//})

//relier le menu aux sections
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');   
            })
        }
    })
}

// Fenêtre popup
document.addEventListener("DOMContentLoaded", (event) => {

    // Récupérer le lien "Mentions légales" du footer
    var mentionsLegalesLink = document.getElementById('mentionsLegales');

    // Récupérer la fenêtre pop-up
    var popupOverlay = document.getElementById('popup-overlay');

    // Récupérer le bouton de fermeture de la fenêtre pop-up
    var popupExitButton = document.querySelector('.popup-exit');

    // Ajouter un gestionnaire d'événement pour ouvrir la fenêtre pop-up
    mentionsLegalesLink.addEventListener('click', function() {
        popupOverlay.style.display = 'flex';
    });

    // Ajouter un gestionnaire d'événement pour fermer la fenêtre pop-up
    popupExitButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});
//Envoi des données
function send_form() {
    var email = document.getElementById('email').value;
    var analogies = document.getElementById('analogies').value;
    var valeurAnalogies = document.getElementById('valeurAnalogies').value;
    var explications = document.getElementById('explications').value;
    var images = document.getElementById('images').value;

    var data_form = {
        email: email,
        analogies: analogies,
        valeurAnalogies: valeurAnalogies,
        explications: explications,
        images: images
    };

    fetch('http://perso-etudiant.u-pem.fr/~gambette/portrait/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_form)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse du serveur:', data);

        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi des données:', error);
        });
}

// Ajoute de la classe 'slide-in' à la section visible
function addSlideInClass() {
    let sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('slide-in');
        } else {
            section.classList.remove('slide-in');
        }
    });
}

// détecter le défilement
window.addEventListener('scroll', addSlideInClass);

// détecter le chargement initial de la page
document.addEventListener('DOMContentLoaded', addSlideInClass);
