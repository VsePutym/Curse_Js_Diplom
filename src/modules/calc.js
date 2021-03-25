const calc = () => {

    const prise = document.getElementById('price-total');

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('#m1')) {
            prise.textContent = '2999';
        } else if (target.matches('#m2')) {
            prise.textContent = '14990';
        }
        else if (target.matches('#m3')) {
            prise.textContent = '21990';
        }
        else if (target.matches('#m4')) {
            prise.textContent = '24990';
        }
    })

}

export default calc;