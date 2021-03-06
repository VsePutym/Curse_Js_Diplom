/* eslint-disable eol-last */
/* eslint-disable prefer-const */
const burgerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');
    const arrowUp = document.getElementById('totop');
    const topMenu = document.querySelector('.top-menu');
    const width = document.documentElement.clientWidth; //? ширина экрана

    arrowUp.style.display = 'none';

    document.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        if (width < 768) {
            if (scrollTop >= 300) {
                topMenu.style.cssText = `position: fixed; z-index: 1120`;
                arrowUp.style.display = 'block';
            } else {
                topMenu.style.cssText = 'position: relative z-index: 1120;';
                arrowUp.style.display = 'none';
            }
        } else if (width > 768) {
            if (scrollTop >= 300) {
                arrowUp.style.display = 'block';
            } else {
                arrowUp.style.display = 'none';
            }
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