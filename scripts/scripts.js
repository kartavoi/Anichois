// Функция для появления элементов при прокрутке
function onScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const triggerBottom = window.innerHeight / 1.2;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', onScrollAnimation);

// Вызвать функцию сразу после загрузки страницы
onScrollAnimation();


