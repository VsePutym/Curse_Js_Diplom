/* eslint-disable eol-last */
const chooseGym = () => {
    const clubSelect = document.querySelector('.club-select');
    const changeGym = document.getElementById('changeGym');
    const width = document.documentElement.clientWidth;
    let count = 60;

    let changeinterval;
    const showGym = function () {
        changeinterval = requestAnimationFrame(showGym);
        count++;
        if (count < 110) {
            changeGym.style.top = count + '%';
        } else if (count > 110) {
            changeGym.style.top = 110 + '%';
        } else {
            cancelAnimationFrame(changeinterval);
        }
    };

    if (width > 768) {
        document.addEventListener('click', e => {
            if (!e.target.classList.contains('clubSelect')) {
                changeGym.style.display = 'block';
                count = 60;
                changeinterval = requestAnimationFrame(showGym);
            }
            if (!e.target.matches('.club-select')) {
                const liTarget = e.target.closest('.club-select');
                if (liTarget === null) {
                    changeGym.style.display = 'none';
                }
            }
        });
    } else {
        clubSelect.addEventListener('click', () => {
            changeGym.style.display = 'block';
        });
    }
};

export default chooseGym;