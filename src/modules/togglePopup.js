/* eslint-disable linebreak-style */
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
    const gift = document.getElementById('gift');
    const present = document.querySelector('.present');
    const thanks = document.getElementById('thanks');
    const width = document.documentElement.clientWidth; //? ширина экрана
    let count = 50;


    document.addEventListener('click', e => {
        const messageChecked = document.querySelector('.status-cheked');

        const resetModal = () => {
            formText.forEach(item => { //? очищаем инпуты
                item.value = '';
            });

            checkbox.forEach(item => { //? обнуляем чекбоксы
                item.checked = false;
            });

            freeVisitForm.style.display = 'none'; //? уводим в инвиз форму freeVisit
            callbackForm.style.display = 'none'; //? уводим в инвиз форму call
            thanks.style.display = 'none'; //? уводим в инвиз форму thanks
            gift.style.display = 'none'; //? уводим в инвиз форму preset

            if (messageChecked) {
                messageChecked.remove();
            }

        };

        if (e.target.matches('.open-popup')) { //? form freeVisit
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
        }

        if (e.target.matches('.callback-btn')) { //? form call me
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
        }

        if (e.target.matches('.present')) { //! Работаем с модалкой подарка
            const target = e.target;
            if (target) {
                if (width > 768) {
                    gift.style.display = 'block';
                    present.style.display = 'none';
                    count = 50;
                    popupAnimate = requestAnimationFrame(showPopup);
                } else if (width < 768) {
                    gift.style.display = 'block';
                    present.style.display = 'none';
                    wrapperPresent.style.top = 11 + '%';
                }
            }
        }

        if (e.target.matches('.close-btn')) { //? нажимаем на ok и форма уходит в инвиз
            resetModal();
        }

        if (e.target.matches('.overlay')) { //? если нажимаем мышкой в не поля модалки, она уходит в инвиз
            resetModal();
        }

        if (!e.target.matches('.form-content')) {
            const closeTarget = e.target.closest('.close_icon'); //? если клик по крестику делаем reset
            if (closeTarget) {
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