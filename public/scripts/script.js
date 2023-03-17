let text = document.getElementById('text');
let favela_poste_esq = document.getElementById('favela_poste_esq');
let favela1 = document.getElementById('favela1');
let favela4 = document.getElementById('favela4');
let favela5 = document.getElementById('favela5');
let favelaCasaDir = document.getElementById('favela_casa_dir');
let favelaCasaEsq = document.getElementById('favela_casa_esq');
let favelaMuro = document.getElementById('favela_muro');
let pipaDir1 = document.getElementById('pipa_dir_1');
let pipaDir2 = document.getElementById('pipa_dir_2');

let pipaEsq1 = document.getElementById('pipa_esq_1');
let pipaEsq2 = document.getElementById('pipa_esq_2');
let pipaEsq3 = document.getElementById('pipa_esq_3');
let pipaEsq4 = document.getElementById('pipa_esq_4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = (value <= 500 ? value : 500) * 2.5 + 'px';
    favela_poste_esq.style.top = value * -0.5 + 'px';
    favela_poste_esq.style.left = value * -1.5 + 'px';
    favela5.style.left = value * 1.5 + 'px';
    favela4.style.left = value * -1.5 + 'px';
    favela_poste_dir.style.left = value * 1.5 + 'px';
    favelaCasaDir.style.left = value * 1.5 + 'px';
    favelaCasaEsq.style.left = value * -.5 + 'px';
    
    pipaDir1.style.left = value * 1.5 + 'px';
    pipaDir1.style.top = value * 0.5 + 'px';
    pipaDir2.style.left = value * 1.5 + 'px';
    pipaDir2.style.top = value * 0.5 + 'px';

    pipaEsq1.style.left = value * 1.5 + 'px';
    pipaEsq1.style.top = value * -0.5 + 'px';
    pipaEsq2.style.left = value * -1.5 + 'px';
    pipaEsq2.style.top = value * -0.5 + 'px';
    pipaEsq3.style.left = value * 1.5 + 'px';
    pipaEsq3.style.top = value * -0.5 + 'px';
    pipaEsq4.style.left = value * -1.5 + 'px';
    pipaEsq4.style.top = value * -0.5 + 'px';
});