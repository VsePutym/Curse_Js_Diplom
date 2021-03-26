/* eslint-disable eol-last */
const calc = () => {
    const promotionalCode = '1';
    const promocat = document.querySelector('.promocat');
    let price = document.getElementById('price-total');
    const month = document.querySelectorAll('.m');

    document.addEventListener('click', e => {

        const test = (arg) => {
            let sum = arg;
            const percent = (sum * 30) / 100;
            price.textContent = sum - percent;
        };

        const target = e.target;
        if (target.matches('#m1')) {
            price.textContent = 2999;
        } else if (target.matches('#m2')) {
            price.textContent = 14990;
        } else if (target.matches('#m3')) {
            price.textContent = 21990;
        } else if (target.matches('#m4')) {
            price.textContent = 24990;
        }

        // promocat.addEventListener('input', (e) => {
        //     const target = e.target;
        //     console.log(target.value);
        //     if (target.value === promotionalCode) {
    
        //                 test(price.textContent);

                
        //     };
        // });






    });

};

export default calc;