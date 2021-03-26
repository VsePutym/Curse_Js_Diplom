/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const servicesSlider = () => {
    const slider = document.querySelector('.services-slider');
    const slide = document.querySelectorAll('.services_slide');
    const activeSlide = document.querySelector('.services_slide-active');


    slider.style.cssText = `
    position: relative;
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
    transition: 250ms;`;


    slide.forEach((item => {
        if (item.matches('.services_slide-active')) {
            item.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;`;
        } else {
            item.style.cssText = `min-width: 210px; margin-right: 8px; margin-left: 8px;`;
        }
    }));

    let marginLeft = 0;
    const maxSlide = -1125;
    const minSlide = 0;


    document.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.prev')) {
            if (marginLeft < minSlide) {
                marginLeft += 225;
                activeSlide.style.marginLeft = `${marginLeft}px`;
            }
            if (marginLeft >= minSlide) {
                marginLeft = maxSlide;
                activeSlide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;`;
            }

        }
        if (target.closest('.next')) {
            if (marginLeft > maxSlide) {
                marginLeft -= 225;
                activeSlide.style.marginLeft = `${marginLeft}px`;
            }
            if (marginLeft === maxSlide) {
                marginLeft = minSlide;
                activeSlide.style.cssText = `transition: all 0.2s linear 0s; min-width: 210px; margin-left: 0px;`;
            }
        }
    });


};


export default servicesSlider;