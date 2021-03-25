/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const mainSlider = () => {
    const mainSlider = document.querySelector('.main-slider');
    const slide = document.body.querySelectorAll('.slide');

    mainSlider.style.cssText = `
    height: 100%;
    max-height: 541px;
    padding-top: 23px;
    `;


    let currentSlide = 0; //?  это номер слайда

    const prevSlide = (elem, i) => {
        elem[i].style.display = 'none';
    };

    const nextSlide = (elem, i) => {
        elem[i].style.display = 'block';
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'slide');
        currentSlide++;
        if (currentSlide >= 5) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide');
    };

    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };

    startSlide(2000);
};

export default mainSlider;