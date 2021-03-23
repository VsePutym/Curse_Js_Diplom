/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
const showPopup = () => {
    const freeVisitForm = document.getElementById('free_visit_form');
    const callbackForm = document.getElementById('callback_form');
    const wrapperVisit = freeVisitForm.querySelector('.form-wrapper');
    const wrapperCall = callbackForm.querySelector('.form-wrapper');
    const formText = document.querySelectorAll('.form-text');
    const wrapperInputs = document.querySelectorAll('.wrapper-inputs');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const width = document.documentElement.clientWidth;

    let count = 50;

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
        } else if (e.target.classList.contains('overlay')) {
            freeVisitForm.style.display = 'none';
            formText.forEach(item => {
                item.value = '';
                const status = document.querySelector('.status');
                status.textContent = '';
            });
            checkbox.forEach(item => {
                item.checked = false;
            });
            wrapperInputs.forEach(item => {
                item.style.display = 'block';
            });
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
        } else if (e.target.classList.contains('overlay')) {
            callbackForm.style.display = 'none';
            formText.forEach(item => {
                item.value = '';
                const status = document.querySelector('.status');
                status.textContent = '';
            });
            checkbox.forEach(item => {
                item.checked = false;
            });
            wrapperInputs.forEach(item => {
                item.style.display = 'block';
            });
        }

        if (!e.target.matches('.form-content')) {
            const closeTarget = e.target.closest('.close_icon');
            if (closeTarget) {
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
                wrapperInputs.forEach(item => {
                    item.style.display = 'block';
                });
                formText.forEach(item => {
                    item.value = '';
                    const status = document.querySelector('.status');
                    status.textContent = '';
                    checkbox.forEach(item => {
                        item.checked = false;
                    });
                });
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
        } else {
            cancelAnimationFrame(popupAnimate);
        }
    };

};

export default showPopup;