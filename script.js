setInterval(moveSlider, 7000);

let menuItems = document.querySelectorAll('.menu__item');
let btnSubmit = document.querySelector('.form__btn');

menuItems.forEach(item => {
    item.addEventListener('click', changeMod);
});

btnSubmit.addEventListener('click', checkPassword);

function moveSlider() {
    let slider = document.querySelector('.slider');
    let sliderWidth = slider.offsetWidth;
    let newScrollPosition = slider.scrollLeft + sliderWidth;
    if (newScrollPosition === slider.scrollWidth) {
        slider.scroll(0, 0);
    } else {
        slider.scroll(sliderWidth + slider.scrollLeft, 0);
    }
}

function changeMod(e) {
    let root = document.documentElement;
    let slider = document.querySelector('.slider');
    let audios = document.querySelectorAll('audio');
    slider.scroll(0, 0);

    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    switch (true) {
        case (this.classList.contains('menu__item_std')):
            root.classList.remove('hearts-of-stone');
            root.classList.remove('blood-and-wine');
            root.classList.add('standard');
            audios[0].play();
            audios[0].volume = 0.15;
            break;
        case (this.classList.contains('menu__item_hos')):
            root.classList.remove('standard');
            root.classList.remove('blood-and-wine');
            root.classList.add('hearts-of-stone');
            audios[1].play();
            audios[1].volume = 0.25;
            break;
        case (this.classList.contains('menu__item_baw')):
            root.classList.remove('hearts-of-stone');
            root.classList.remove('standard');
            root.classList.add('blood-and-wine');
            audios[2].play();
            audios[2].volume = 0.1;
            break;
    }
}

function checkPassword() {
    let inputConPassword = document.querySelector('.input_confpassword');
    let password = document.querySelector('.input_password').value;
    let conPassword = inputConPassword.value;
    if (password !== conPassword && password !== '' && conPassword !== '') {
        inputConPassword.setCustomValidity('Passwords not equal');
    } else {
        inputConPassword.setCustomValidity('');
    }
}