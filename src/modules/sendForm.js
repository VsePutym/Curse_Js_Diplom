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
    const wrapperInputs = document.querySelectorAll('.wrapper-inputs');

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.style.cssText = `font-size: 2rem;
    color: #fff; transform: translateY(200%);`;

    let validName = false;
    let validPhone = false;


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

    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();

            if (validName && validPhone) {
                item.appendChild(statusMessage);
                wrapperInputs.forEach(item => {
                    item.style.display = 'none';
                });

                statusMessage.textContent = loadMessage;

                const formData = new FormData(item);

                postData(formData)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200.');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .catch(error => {
                        statusMessage.textContent = errorMessage;
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