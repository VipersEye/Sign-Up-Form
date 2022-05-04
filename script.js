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