/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable eol-last */
const calc = () => {
    const promotionalCode = 'ТЕЛО2019';
    const promocat = document.querySelector('.promocat');
    const price = document.getElementById('price-total');

    let discount = false;

    document.addEventListener('click', e => {
        const m = document.querySelectorAll('.m');
        const target = e.target;

        let total = 0;

        const test = () => {
            if (discount === true) {
                const price = document.getElementById('price-total');
                const percent = (total * 30) / 100;
                let sum = total - percent;
                price.textContent = Math.floor(sum);
            } else if (discount === false) {
                m.forEach(item => {
                    if (item.checked) {
                        if (item.matches('#m1')) {
                            total = 2999;
                            price.textContent = total;
                        } else if (item.matches('#m2')) {
                            total = 14990;
                            price.textContent = total;
                        } else if (item.matches('#m3')) {
                            total = 21990;
                            price.textContent = total;
                        } else if (item.matches('#m4')) {
                            total = 24990;
                            price.textContent = total;
                        }
                    }
                });
            }
        };

        const showResult = () => {
            test();
            promocat.addEventListener('input', e => {
                const target = e.target;
                if (target.value === promotionalCode) {
                    discount = true;
                    test();
                }
                if (target.value !== promotionalCode) {
                    discount = false;
                    test();
                }
            });
        };


        m.forEach(item => {
            if (item.style.backgroundColor = '#ffd11a;') {
                if (target.matches('#m1')) {
                    total = 2999;
                    showResult();
                } else if (target.matches('#m2')) {
                    total = 14990;
                    showResult();
                } else if (target.matches('#m3')) {
                    total = 21990;
                    showResult();
                } else if (target.matches('#m4')) {
                    total = 24990;
                    showResult();
                }
            }
        });

        if (target === promocat) {
            showResult();
        }
    });
};

export default calc;