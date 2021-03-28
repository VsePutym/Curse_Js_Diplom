/* eslint-disable eol-last */
const photoGallary = () => {
    const slider = document.querySelector('.gallery-slider');
    const slide = document.querySelectorAll('.slider-gallery');
    const ul = document.querySelector('.slider-dots');
    const wrapper = document.querySelector('.gallery-slider-wrapper');
    const img = document.querySelectorAll('.img-slide-gallery');

    img.forEach(item => {
        item.style.maxWidth = 600 + 'px';
    });

    wrapper.style.position = `relative`;

    class AddDots {
        constructor(elem, newClass) {
            this.elem = elem;
            this.newClass = newClass;
        }
        addNewClass() {
            this.elem = document.createElement('li');
            this.elem.classList.add('dot');
            ul.append(this.elem);
        }
    }
    const appData = new AddDots();

    slide.forEach(item => {
        if (item) {
            appData.addNewClass();
        }
    });

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('slick-active');

    let currentSlide = 0; //?  это номер слайда
    let interval;

    const prevSlide = (elem, i, strClass) => {
        elem[i].classList.remove(strClass);
    };

    const nextSlide = (elem, i, strClass) => {
        elem[i].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        const dot = document.querySelectorAll('.dot');

        prevSlide(slide, currentSlide, 'slick-active');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slick-active');
        nextSlide(dot, currentSlide, 'slick-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };



    slider.addEventListener('click', e => { //? Слушаем слайдер
        const dot = document.querySelectorAll('.dot');

        e.preventDefault();
        const target = e.target;

        if (!target.matches('.fa')) {
            return;
        }

        prevSlide(slide, currentSlide, 'slick-active');
        prevSlide(dot, currentSlide, 'slick-active');
        if (target.closest('.next-g')) { //? минусуем или плюсуем счётчик
            currentSlide++;
        }
        if (target.closest('.prev-g')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slick-active');
        nextSlide(dot, currentSlide, 'slick-active');
    });

    slider.addEventListener('mouseover', e => {
        if (e.target.matches('.fa') || //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', e => {
        if (e.target.matches('.fa') || //? matches(если евент таргет является так-то классом)
            e.target.matches('.dot')) {
            startSlide();
        }
    });

    startSlide(1500);
};

export default photoGallary;