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
    let audios = document.querySelectorAll('audio');
    slider.scroll(0, 0);
    audios[0].pause();
    audios[1].pause();
    audios[2].pause();
    audios[0].currentTime = 0;
    audios[1].currentTime = 0;
    audios[2].currentTime = 0;
    switch (true) {
        case (this.classList.contains('menu__item_std')):
            
            root.classList.remove('hearts-of-stone');
            root.classList.remove('blood-and-wine');
            root.classList.add('standard');
            audios[0].volume = 0.4;
            audios[0].play();
            break;
        case (this.classList.contains('menu__item_hos')):
            root.classList.remove('standard');
            root.classList.remove('blood-and-wine');
            root.classList.add('hearts-of-stone');
            audios[1].volume = 0.7;
            audios[1].play();
            break;
        case (this.classList.contains('menu__item_baw')):
            root.classList.remove('hearts-of-stone');
            root.classList.remove('standard');
            root.classList.add('blood-and-wine');
            audios[2].volume = 0.3;
            audios[2].play();
            break;
    }
}