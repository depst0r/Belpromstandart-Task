window.addEventListener('DOMContentLoaded', () => {
    const cross = document.querySelectorAll('span'),
        cercle = document.querySelectorAll('.aks-accordion-item-icon'),
        row = document.querySelectorAll('.aks-accordion-item-row');

    function changes(wrapper, arg, styleOne, styleTwo) {
        wrapper.forEach((wrapper, i) => {
            wrapper.addEventListener('click', () => {
                arg[i].classList.toggle(styleOne);
                arg[i].classList.toggle(styleTwo);
            })
        });
    }


    changes(row, cercle, 'animated_cercle', '');
    changes(row, cross, 'animated_cross', 'shadow');

});