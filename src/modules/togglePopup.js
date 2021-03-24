/* eslint-disable max-len */
/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */

const showPopup = () => {
    const freeVisitForm = document.getElementById('free_visit_form'); //! Модалка на визит
    const callbackForm = document.getElementById('callback_form'); //! модалка на перезвон
    const wrapperVisit = freeVisitForm.querySelector('.form-wrapper'); //* for animate visit modal
    const wrapperCall = callbackForm.querySelector('.form-wrapper'); //* for animate call modal
    const wrapperPresent = document.querySelector('.wrapper-present'); //* for animate present modal
    const formText = document.querySelectorAll('.form-text'); //? inputs with text
    const checkbox = document.querySelectorAll('input[type="checkbox"]'); //? checkbox
    const wrapperInputs = document.querySelectorAll('.wrapper-inputs'); //? wrapper modal windows for delete content modal
    const gift = document.getElementById('gift');
    const present = document.querySelector('.present');
    const width = document.documentElement.clientWidth; //? ширина экрана
    let count = 50;

    const resetModal = () => {
        formText.forEach(item => { //? очищаем инпуты
            item.value = '';
        });
        checkbox.forEach(item => { //? обнуляем чекбоксы
            item.checked = false;
        });
        wrapperInputs.forEach(item => { //? возвращаем поля инпут
            item.style.display = 'block';
        });
    };

    document.addEventListener('click', e => {
        if (e.target.matches('.open-popup')) {
            const target = e.target;
            if (target) {
                if (width > 768) {
                    freeVisitForm.style.display = 'block';
                    count = 50;
                    popupAnimate = requestAnimationFrame(showPopup);
                } else if (width < 768) {
                    freeVisitForm.style.display = 'block';
                    wrapperVisit.style.top = 11 + '%';
                }
            }
        } else if (e.target.classList.contains('overlay')) { //? если нажимаем мышкой в не поля модалки, она уходит в инвиз
            freeVisitForm.style.display = 'none';
            resetModal();
        }
        if (e.target.matches('.callback-btn')) {
            const target = e.target;
            if (target) {
                if (width > 768) {
                    callbackForm.style.display = 'block';
                    count = 50;
                    popupAnimate = requestAnimationFrame(showPopup);
                } else if (width < 768) {
                    callbackForm.style.display = 'block';
                    wrapperCall.style.top = 11 + '%';
                }
            }
        } else if (e.target.classList.contains('overlay')) { //? если нажимаем мышкой в не поля модалки, она уходит в инвиз
            callbackForm.style.display = 'none';
            resetModal();
        }

        if (e.target.matches('.present')) { //! Работаем с модалкой подарка
            gift.style.display = 'block';
            popupAnimate = requestAnimationFrame(showPopup);
        } else if (e.target.classList.contains('overlay-present')) { //? если нажимаем мышкой в не поля модалки, она уходит в инвиз
            gift.style.display = 'none';
            present.style.display = 'none';
        } else if (e.target.matches('.close-present')) {
            gift.style.display = 'none';
            present.style.display = 'none';
        } else if (e.target.matches('.close-ok')) {
            gift.style.display = 'none';
            present.style.display = 'none';
        }

        if (!e.target.matches('.form-content')) {
            const closeTarget = e.target.closest('.close_icon'); //? если клик по крестику делаем reset
            if (closeTarget) {
                freeVisitForm.style.display = 'none'; //? уводим в инвиз форму
                callbackForm.style.display = 'none'; //? уводим в инвиз форму
                resetModal();
            }
        }
    });


    let popupAnimate;
    const showPopup = () => {
        popupAnimate = requestAnimationFrame(showPopup);
        count--;
        if (count > 10) {
            wrapperVisit.style.top = count + '%';
            wrapperCall.style.top = count + '%';
            wrapperPresent.style.top = count + '%';
        } else {
            cancelAnimationFrame(popupAnimate);
        }
    };

};

export default showPopup;