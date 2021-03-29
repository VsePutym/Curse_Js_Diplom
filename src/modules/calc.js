/* eslint-disable prefer-const */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable eol-last */
class Test {
    constructor() {
        this.mozaikaM1 = 1999;
        this.mozaikaM2 = 9900;
        this.mozaikaM3 = 13900;
        this.mozaikaM4 = 19900;
        this.schelkovoM1 = 2999;
        this.schelkovoM2 = 14999;
        this.schelkovoM3 = 21999;
        this.schelkovoM4 = 24990;
        this.total = 1999;
        this.promo = false;
    }

    discount() {

        if (this.promo === true) {
            const price = document.getElementById('price-total');
            const percent = (this.total * 30) / 100;
            let sum = this.total - percent;
            price.textContent = Math.floor(sum);
        } else if (this.promo === false) {
            const price = document.getElementById('price-total');
            this.sum = this.total;
            price.textContent = Math.floor(this.sum);
        }
    }

    showResult() {
        this.discount();
        const promotionalCode = 'ТЕЛО2019';
        const promocat = document.querySelector('.promocat');
        promocat.addEventListener('input', e => {
            const target = e.target;
            if (target.value === promotionalCode) {
                this.promo = true;
                this.discount();
            }
            if (target.value !== promotionalCode) {
                this.promo = false;
                this.discount();
            }
        });
    }
    calc() {
        const mozaika = document.getElementById('card_leto_mozaika');
        const schelkovo = document.getElementById('card_leto_schelkovo');
        const form = document.getElementById('card_order');
        const m1 = document.getElementById('m1');
        const m2 = document.getElementById('m2');
        const m3 = document.getElementById('m3');
        const m4 = document.getElementById('m4');
        form.addEventListener('click', e => {
            const target = e.target;
            const price = document.getElementById('price-total');
            if (price) {
                if (price.textContent === '1999') {
                    this.promo = false;
                }
            }
            if (mozaika) {
                if (mozaika.checked) {
                    if (m1.checked) {
                        this.total = this.mozaikaM1;
                        this.showResult();
                    } else if (m2.checked) {
                        this.total = this.mozaikaM2;
                        this.showResult();
                    } else if (m3.checked) {
                        this.total = this.mozaikaM3;
                        this.showResult();
                    } else if (m4.checked) {
                        this.total = this.mozaikaM4;
                        this.showResult();
                    }
                }
            }
            if (schelkovo) {
                if (schelkovo.checked) {
                    if (m1.checked) {
                        this.total = this.schelkovoM1;
                        this.showResult();
                    } else if (m2.checked) {
                        this.total = this.schelkovoM2;
                        this.showResult();
                    } else if (m3.checked) {
                        this.total = this.schelkovoM3;
                        this.showResult();
                    } else if (m4.checked) {
                        this.total = this.schelkovoM4;
                        this.showResult();
                    }
                }
            }


            if (target === this.promocat) {
                this.showResult();
            }
        });
    }
}

const test2 = new Test();
export default test2;