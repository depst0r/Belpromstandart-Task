window.addEventListener('DOMContentLoaded', () => {
    const cross = document.querySelectorAll('span'),
        cercle = document.querySelectorAll('.aks-accordion-item-icon'),
        content = document.querySelectorAll('.aks-accordion-item-content');



    function animated(selector, style1, style2) {
        selector.forEach(i => {
            i.addEventListener('click', () => {
                i.classList.toggle(style1);
                i.classList.toggle(style2);
            })
        })
    }

    animated(cercle, 'animated_cercle');
    animated(cross, 'animated_cross', 'shadow');
});