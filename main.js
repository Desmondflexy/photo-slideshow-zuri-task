const displayedImage = document.querySelector('.displayed-img');
const heading = document.querySelector('h1');

/* Declaring the array of image filenames and alternative text */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg'];
const altText = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6'];

const n = images.length; // number of images

document.querySelector('.next').addEventListener('click', () => {
    const imageSrc = displayedImage.getAttribute('src')
    const i = (images.indexOf(imageSrc.split('/')[1]) + 1) % n;
    const image = `images/${images[i]}`;

    displayedImage.setAttribute('src', image);
    displayedImage.setAttribute('alt', altText[i]);
})

document.querySelector('.prev').addEventListener('click', () => {
    const imageSrc = displayedImage.getAttribute('src')
    const i = (images.indexOf(imageSrc.split('/')[1]) - 1 + n) % n;
    const image = `images/${images[i]}`;

    displayedImage.setAttribute('src', image);
    displayedImage.setAttribute('alt', altText[i]);
})