/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
const sendForm = () => {
    const form = document.querySelectorAll('form');
    const errorMessage = 'ошибка';
    const loadMessage = 'идет отправка';
    const successMessage = 'отправлено';
    const forName = document.querySelectorAll('.form-name');
    const forTel = document.querySelectorAll('.form-tel');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const wrapperInputs = document.querySelectorAll('.wrapper-inputs');
    const formText = document.querySelectorAll('.form-text');
    const chooseClub = document.querySelectorAll('.check-footer');
    const cardOrder = document.getElementById('card_order');
    const bannerForm = document.getElementById('banner-form');
    console.log(cardOrder);


    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.style.cssText = `
    color: #ffd11a;
    display: contents;
    transform: translateY(200%);
    font-size: 2rem;
    text-align: center;`;

    let validName = false;
    let validPhone = false;
    let validCheckbox = false;

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

    forName.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-ЯёЁ\s\-]/g, '');
        });
        item.addEventListener('blur', event => {
            const target = event.target;
            target.value = target.value.replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/^-+|-+$/g, '').trim();
            if (target.value.length <= 1) {
                target.value = '';
            } else {
                target.value = target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
                validName = true;
            }
        });
    });

    checkbox.forEach((item => {
        item.addEventListener('click', () => {
            if (item.checked === true) {
                validCheckbox = true;
            } else {
                validCheckbox = false;
            }
        });
    }));


    forTel.forEach(item => {
        item.addEventListener('input', event => {
            const target = event.target;
            target.value = target.value.replace(/[^\d()\-+]|([()\-\+])(?=\1)/g, '').replace(/^[()]/g, '').replace(/^(\+)(\d+?)([^0-9-()])+/g, (match, p1, p2) => p1 + p2).trim();

            [...target.value].forEach((item, idx) => {
                if (item === "+" && idx > 0) target.value = target.value.slice(0, idx);
            });
            const reg = /^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/g;
            const getReg = reg.exec(target.value);
            if (getReg === null) {
                validPhone = false;
                item.setCustomValidity('неверный ввод, попробуйте один из следующих форматов ввода: 81231231212 или +71231231212 или 8(123)1233265 или 8-123-123-12-12 или +7(123)123-12-12 или 8(123)123-12-12 или +7123-123-12-12');
            } else {
                target.value = target.value.replace(/^\+?[78]+[\-\(]?(\d{3})[\-\)]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/gm, '+7($1)$2-$3-$4').trim();
                validPhone = true;
                item.setCustomValidity('');
            }
        });
    });

    form.forEach(item => {
        console.log(item);
        item.addEventListener('submit', event => {
            event.preventDefault();

            const formCall = document.getElementById('footer_form');
            if (event.target === formCall) {
                chooseClub.forEach((item => {
                    if (item.checked === true) {
                        validCheckbox = true;
                        validName = true;
                    }
                }));
            }
            const target = event.target;
            if (validPhone === true && validCheckbox === true && validName === true) {
                console.log(validName);
                console.log(validPhone);
                console.log(validCheckbox);

                target.appendChild(statusMessage);
                statusMessage.style.display = 'contents';
                statusMessage.textContent = loadMessage;

                const formData = new FormData(target); //? Принимаем форму

                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        }
                        if (target !== formCall && target !== cardOrder && target !== bannerForm) { //! if target not modal window 
                            wrapperInputs.forEach(item => { //? скрываем с модалки контент
                                item.style.display = 'none';
                                statusMessage.style.display = 'block';
                            });
                        } else {
                            statusMessage.style.display = 'contents';
                        }
                        statusMessage.textContent = successMessage;
                        setTimeout(() => {
                            statusMessage.remove();
                            wrapperInputs.forEach(item => {
                                item.style.display = 'block';
                            });
                            resetModal();
                        }, 2000);
                    })
                    .catch(error => {
                        if (target !== formCall && target !== cardOrder && target !== bannerForm) { //! if target not modal window 
                            wrapperInputs.forEach(item => { //? скрываем с модалки контент
                                item.style.display = 'none';
                                statusMessage.style.display = 'block';
                            });
                        } else {
                            statusMessage.style.display = 'contents';
                        }
                        statusMessage.textContent = errorMessage;
                        setTimeout(() => {
                            statusMessage.remove();
                            wrapperInputs.forEach(item => {
                                item.style.display = 'block';
                            });
                            resetModal();
                        }, 2000);
                        console.error(error);
                    });
            }
        });
    });

    // eslint-disable-next-line arrow-body-style
    const postData = formData => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    };
};

export default sendForm;