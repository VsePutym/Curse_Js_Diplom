/* eslint-disable no-use-before-define */
/* eslint-disable eol-last */
/* eslint-disable max-len */
/* eslint-disable no-useless-escape */

const sendForm = () => {
    const form = document.querySelectorAll('form');
    const loadMessage = 'идет отправка';
    const forName = document.querySelectorAll('.form-name');
    const forTel = document.querySelectorAll('.form-tel');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    const formText = document.querySelectorAll('.form-text');
    const chooseClub = document.querySelectorAll('.check-footer');
    const popup = document.querySelectorAll('.popup');

    const statusMessage = document.createElement('div'); //? message for loaded and error, success type not for modal
    statusMessage.classList.add('status');
    statusMessage.style.cssText = `
    font-size: 20px;
    width: 90%;
    color: #fff;
    font-weight: 500;
    margin-top: 30px;`;

    const thanksSuccess = 'Ваша заявка отправлена, скоро мы с вами свяжемся';
    const thanksError = `Упс что-то пошло не так, сервер устал и прилёг`;
    const statusSuccess = `Спасибо`;
    const statusError = `Ошибка`;

    const messageChecked = document.createElement('div'); //? сообщение для check
    messageChecked.classList.add('status-cheked');
    messageChecked.textContent = 'Не стоит галочка согласен на обработку данных';
    messageChecked.style.cssText = `
    color: #ffd11a;
    display: contents;
    margin-top: 10px;
    font-size: 1rem;
    text-align: center;`;

    const btnSend = document.querySelectorAll('.btn-send'); //? меняем стиль кнопки в в модалке, чтобы был margin до message
    btnSend.forEach((item => {
        item.style.cssText = `
        margin-bottom: 10px;
        height: 45px;
        width: 160px;`;
    }));

    const person = document.getElementById('person-banner');
    person.style.cssText = `
    margin-top: 17px;
    margin-bottom: 15px;
    position: relative;
    `;

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

        statusMessage.remove();
        popup.forEach(item => {
            item.style.display = 'none';
        });
    };


    const changeModal = (message, statusMessage) => {
        const thanks = document.getElementById('thanks');
        const status = document.getElementById('status');
        const modalText = document.getElementById('modalText');

        modalText.textContent = message;
        status.textContent = statusMessage;
        thanks.style.display = 'block';
    };


    checkbox.forEach((item => {
        item.addEventListener('click', () => {
            if (item.checked === true) {
                validCheckbox = true;
            } else {
                validCheckbox = false;
            }
        });
    }));

    //!Регулярки для проверки инпутов

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

    //! Отправка на сервер

    form.forEach(item => {

        item.addEventListener('submit', event => {
            event.preventDefault();
            const target = event.target;

            const formCall = document.getElementById('footer_form');
            if (target === formCall) {
                validCheckbox = true;
                chooseClub.forEach((item => {
                    if (item.checked === true) {
                        validCheckbox = true;
                        validName = true;
                    }
                }));
            }

            const formclubsCart = document.getElementById('card_order');
            const clubsCartCheck = document.querySelector('.check_club-cards');
            if (target === formclubsCart) {
                console.log(clubsCartCheck.checked);
                if (clubsCartCheck.checked === true) {
                    validCheckbox = true;
                } else {
                    validCheckbox = false;
                    formclubsCart.appendChild(messageChecked);
                }
            }

            const form2 = document.getElementById('form2'); //? freeVisit
            const check2 = document.getElementById('check2');
            if (target === form2) {
                if (check2.checked === true) {
                    validCheckbox = true;
                } else {
                    validCheckbox = false;
                    form2.appendChild(messageChecked);
                }
            }

            const form1 = document.getElementById('form1'); //? модалка перезвоните
            const check = document.getElementById('check');
            if (target === form1) {
                if (check.checked === true) {
                    validCheckbox = true;
                } else {
                    validCheckbox = false;
                    form1.appendChild(messageChecked);
                }
            }

            const bannerForm = document.getElementById('banner-form'); //? Банер форма отправки
            const check1 = document.getElementById('check1');
            if (target === bannerForm) {
                if (check1.checked === true) {
                    validCheckbox = true;
                } else {
                    validCheckbox = false;
                    bannerForm.appendChild(messageChecked);
                }
            }

            if (validPhone === true && validCheckbox === true && validName === true) {
                messageChecked.remove();
                target.appendChild(statusMessage);
                statusMessage.style.display = 'contents';
                statusMessage.textContent = loadMessage;

                const formData = new FormData(target); //? Принимаем форму

                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        }
                        resetModal();
                        changeModal(thanksSuccess, statusSuccess);
                        setTimeout(() => {
                            resetModal();
                        }, 3000);
                    })
                    .catch(error => {
                        resetModal();
                        changeModal(thanksError, statusError);
                        setTimeout(() => {
                            resetModal();
                        }, 3000);
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