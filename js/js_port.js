document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript загружен");

    // Открытие/закрытие мобильного меню (гамбургер)
    if (menuButton) {
        menuButton.addEventListener("click", () => {
            menuButton.classList.toggle("open");
            dropdownMenu.classList.toggle("open");
        });

        document.addEventListener("click", (e) => {
            if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
                menuButton.classList.remove("open");
                dropdownMenu.classList.remove("open");
            }
        });
    }

});




/*const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;
let isDragging = false, startX, scrollLeft;

function updateCarousel() {
    const offset = -index * 300;
    carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : 2;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index < 2) ? index + 1 : 0;
    updateCarousel();
});

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = index * 300;
    carousel.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    let tempIndex = Math.round((scrollLeft - walk) / 300);
    if (tempIndex >= 0 && tempIndex <= 2) index = tempIndex;
    updateCarousel();
}); */

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length; // Теперь автоматическое определение количества изображений
let index = 0;
let isDragging = false, startX, scrollLeft;

function updateCarousel() {
    const offset = -index * 300; // 300px — ширина каждого изображения
    carousel.style.transform = `translateX(${offset}px)`;
}

// Клик по кнопкам "Назад" и "Вперед"
prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    updateCarousel();
});

// Добавляем поддержку клавиатуры
prevBtn.addEventListener('focus', () => prevBtn.classList.add('focused'));
prevBtn.addEventListener('blur', () => prevBtn.classList.remove('focused'));
nextBtn.addEventListener('focus', () => nextBtn.classList.add('focused'));
nextBtn.addEventListener('blur', () => nextBtn.classList.remove('focused'));

prevBtn.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") { // Поддержка Enter и пробела
        prevBtn.click();
    }
});

nextBtn.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") { // Поддержка Enter и пробела
        nextBtn.click();
    }
});

// Перетаскивание мышью
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = index * 300;
    carousel.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    let tempIndex = Math.round((scrollLeft - walk) / 300);
    if (tempIndex >= 0 && tempIndex < totalImages) index = tempIndex;
    updateCarousel();
});
