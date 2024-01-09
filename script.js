// Burger menu
(function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-header');
    const menuClose = document.querySelector('.burger-close');
    
    burger.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
    
    menuClose.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!menu.contains(target) && !burger.contains(target)) {
            menu.classList.remove('nav-active');
        }
    });
    
    const menuItems = document.querySelectorAll('.nav-header a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('nav-active');
        });
    });
})();


//Slider
const slides = document.querySelectorAll('.slider-block');
const pagination = document.querySelector('.controls');

let currentSlideIndex = 0;
let intervalId;

const paginationControls = [];

function createPaginationControls() {
    const div = document.createElement('div');
    div.className = 'control-item';
    pagination.appendChild(div);
    paginationControls.push(div);
}

function addPagination() {
    slides.forEach(createPaginationControls);
    paginationControls[0].classList.add('active');
}

function addActiveSlide() {
    paginationControls[currentSlideIndex].classList.add('active');
}

function removeActiveSlide() {
    paginationControls[currentSlideIndex].classList.remove('active');
}

function showSlide() {
    slides[currentSlideIndex].classList.add('primary');
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove('primary');
}

function nextSlide() {
    hideSlide();
    removeActiveSlide();
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    addActiveSlide();
    showSlide();
}

function previousSlide() {
    hideSlide();
    removeActiveSlide();
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    addActiveSlide();
    showSlide();
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

addPagination();

const arrowRight = document.querySelector('.slide-second');
arrowRight.addEventListener('click', () => {
    resetAutoSlide();
    nextSlide();
});

const arrowLeft = document.querySelector('.slide-first');
arrowLeft.addEventListener('click', () => {
    resetAutoSlide();
    previousSlide();
});

startAutoSlide();
