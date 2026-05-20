let slideAtual = 0;

const slides = document.querySelectorAll(".slide");

function mostrarSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function proximo(){

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
}

function anterior(){

    slideAtual--;

    if(slideAtual < 0){
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
}