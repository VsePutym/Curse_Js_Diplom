const showPopup = () => {
    const freeVisitForm = document.getElementById('free_visit_form');
    const formWrapper = freeVisitForm.querySelector('.form-wrapper');
    const width = document.documentElement.clientWidth;

    let count = 50;

    document.addEventListener('click', e => {
        if (e.target.matches('.open-popup')) {
            const target = e.target;
            if (target) {
                if (width > 768) {
                    freeVisitForm.style.display = 'block';
                    count = 50;
                    popupRequst = requestAnimationFrame(showPopup);
                } else if (width < 768) {
                    freeVisitForm.style.display = 'block';
                    formWrapper.style.top = 11 + '%';
                }
            }
        } else {
            freeVisitForm.style.display = 'none';
        }
        if (!e.target.matches('.form-content')) {
            const closeTarget = e.target.closest('.close_icon');
            if (closeTarget) {
                freeVisitForm.style.display = 'none';
                formWrapper.style.top = '';
            }
        }
    });

    let popupRequst;
    const showPopup = () => {
        popupRequst = requestAnimationFrame(showPopup);
        count--;
        if (count > 10) {
            formWrapper.style.top = count + '%';
        } else {
            cancelAnimationFrame(popupRequst);
        }
    };

};

export default showPopup;