// Slider de Imagens
let index = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(showNextImage, 3000); // Muda de imagem a cada 3 segundos
window.onload = showNextImage;

// Configuração do Cronômetro
const startDate = new Date('2019-02-13T00:00:00'); // Data de início
const countdownElement = document.getElementById("countdown");

function calculateTime() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.436875)) % 12;
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) % 4;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 7;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <span>${years} anos</span>
        <span>${months} meses</span>
        <span>${weeks} semanas</span>
        <span>${days} dias</span>
        <span>${hours} horas</span>
        <span>${minutes} minutos</span>
        <span>${seconds} segundos</span>
    `;
}

setInterval(calculateTime, 1000);
