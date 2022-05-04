function sliderMove() {
    let slider = document.querySelector('.slider');
    let sliderWidth = slider.offsetWidth;
    let newScrollPosition = slider.scrollLeft + sliderWidth;
    if (newScrollPosition === slider.scrollWidth) {
        slider.scroll(0, 0);
    } else {
        slider.scroll(sliderWidth + slider.scrollLeft, 0);
    }
}

setInterval(sliderMove, 7000);

let menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach(item => {
    item.addEventListener('click', changeMod);
});

function changeMod(e) {
    let root = document.documentElement;
    let slider = document.querySelector('.slider');
    slider.scroll(0, 0);
    switch (true) {
        case (this.classList.contains('menu__item_std')):
            root.classList.remove('hearts-of-stone');
            root.classList.remove('blood-and-wine');
            root.classList.add('standard');
            break;
        case (this.classList.contains('menu__item_hos')):
            root.classList.remove('standard');
            root.classList.remove('blood-and-wine');
            root.classList.add('hearts-of-stone');
            break;
        case (this.classList.contains('menu__item_baw')):
            root.classList.remove('hearts-of-stone');
            root.classList.remove('standard');
            root.classList.add('blood-and-wine');
            break;
    }
}