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

        data.forEach(function(element){
            console.log("Si j'étais " + element);
            sections[numCase].innerHTML += "<p> <img class=\"image-cliquable\" src=" + element.images + "> Si j'étais " + element.analogies + ", je serais " + element.valeursAnalogies + element.explications + "</p>";
            numCase++;
        }) 
    }) 
});

 //récupérer les données du formulaire avec les id en html
var inputs = document.querySelectorAll('#analogie,#valeurAnalogie')
inputs.forEach(function(input){
    input.addEventListener('keyup',function(event){
        console.log(input.value)
    })
    
})

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



    /*var numCase = 0
    analogies.forEach(function (element) {
        console.log(numCase)
        console.log("Si j'étais " + element)
        document.querySelector(".liste-analogies").innerHTML += "<h2> Si j'étais " + element + ", je serais " + valeursAnalogies[numCase] + "</h2>"
            numCase+=1
    }
    )*/

    

