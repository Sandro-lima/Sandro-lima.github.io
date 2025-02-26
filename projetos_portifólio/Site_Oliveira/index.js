// Função para mudar a imagem
function changeImage(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelector('.carousel-images');
    const totalImages = images.children.length;
    let currentIndex = Array.from(images.children).findIndex(image => image.style.display !== 'none');

    if (currentIndex === -1) currentIndex = 0;

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = totalImages - 1;  // Volta para a última imagem
    } else if (newIndex >= totalImages) {
        newIndex = 0;  // Vai para a primeira imagem
    }

    // Esconde a imagem atual
    images.children[currentIndex].style.display = 'none';

    // Exibe a nova imagem
    images.children[newIndex].style.display = 'block';
}
