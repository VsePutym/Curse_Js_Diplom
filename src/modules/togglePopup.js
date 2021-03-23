/* eslint-disable eol-last */
/* eslint-disable no-use-before-define */
const showPopup = () => {
    const freeVisitForm = document.getElementById('free_visit_form');
    const callbackForm = document.getElementById('callback_form');
    const wrapperVisit = freeVisitForm.querySelector('.form-wrapper');
    const wrapperCall = callbackForm.querySelector('.form-wrapper');
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
        } else {
            freeVisitForm.style.display = 'none';
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
        } else {
            callbackForm.style.display = 'none';
        }

        if (!e.target.matches('.form-content')) {
            const closeTarget = e.target.closest('.close_icon');
            if (closeTarget) {
                freeVisitForm.style.display = 'none';
                callbackForm.style.display = 'none';
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