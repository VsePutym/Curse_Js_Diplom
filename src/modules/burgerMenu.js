/* eslint-disable eol-last */
/* eslint-disable prefer-const */
const burgerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    const burger = document.querySelector('.iconBurger');
    const arrowUp = document.getElementById('totop');

    arrowUp.style.display = 'none';

    document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 200) {
            burger.style.cssText = `position: fixed; z-index: 99999; margin-left: -40px; top: 120px;`;
        } else {
            burger.style.cssText = 'position: relative; top: 0px;';
        }
        if (scrollTop >= 300) {
            arrowUp.style.display = 'block';
        } else {
            arrowUp.style.display = 'none';
        }
    });


    document.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.iconBurger')) {
            popupMenu.style.display = 'block';
        }
        if (target.closest('.close-menu-btn')) {
            const closeTarget = target.closest('.close-menu-btn');
            if (closeTarget) {
                popupMenu.style.display = 'none';
            }
        }
        if (target.matches('.hidden-large')) {
            popupMenu.style.display = 'none';
        }
        if (!target.matches('ul>li')) {
            const liTarget = target.closest('ul>li');
            if (liTarget) {
                popupMenu.style.display = 'none';
            }
        }
    });
};

export default burgerMenu;