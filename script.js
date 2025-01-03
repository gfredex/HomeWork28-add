const element = document.getElementById('animated-element');
let position = 0;
let direction = 1;
let shape = 0;
let reshape = 1;
function animate() {
    // Изменяю позицию элемента
    position += direction * 2;
    element.style.left = position + 'px';

    // проверяю достижение края видимого окна и разварот в обратную сторону
    const windowWidth = window.innerWidth;
    if (position >= windowWidth - 100 || position <= 0) {
        direction *= -1;
    }

    // изменение формы фигуры
    shape += reshape * 0.5;
    element.style.borderRadius = shape + '%';

    // проверка на достижение формы круга и разворот в обратную строну
    if (element.style.borderRadius == '50%' || element.style.borderRadius == '0%') {
        reshape *= -1;
    }

    // следующий шаг анимации
    requestAnimationFrame(animate);
}

// Параметрическое задание: x = t * Cos (t); y = t * Sin (t), 
// где t oт 0 дo бесконечности
const element2 = document.querySelector('.animat-element2');
let startX = element2.getBoundingClientRect().x;
let startY = element2.getBoundingClientRect().y;
let newX;
let newY;
let t = 0;
let revers = 1;

function spiral() {

    // console.log(t);

    newX = startX + t * Math.cos(t);
    newY = startY + t * Math.sin(t);
    element2.style.left = newX + 'px';
    element2.style.top = newY + 'px';
    t += revers * 0.05;
    if (t > 100 || t < 0) {
        revers *= -1;
    }
    // следующий шаг анимации
    requestAnimationFrame(spiral);
}

// Задание 3 

const currentView = document.querySelector('.animate-block-page');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page = document.querySelectorAll('.animate-block-page>*')
const btns = document.querySelectorAll('.buttons-change>*')
// currentView.offsetWidth - получаю текущий ширину окна отображения
// currentView.offsetHeight - получаю текущую высоту окна отображения
const widthBlock = currentView.offsetWidth;
const heightBlock = currentView.offsetHeight;
console.log(widthBlock);
console.log(heightBlock);

page[0].style.width = widthBlock + 'px';
page[0].style.height = page[1].style.height = page[2].style.height = heightBlock + 'px'
// page1.offsetHeight = page2.offsetHeight = page3.offsetHeight = heightBlock;

let pressBtn;
let count = 0;
btns[0].addEventListener('click', () => {
    pressBtn = 0;
    if (count == 0) {
        count = 2;
    } else {
        count -= 1;
    }
    console.log(count);
    changePage();
});
btns[1].addEventListener('click', () => {
    pressBtn = 1;
    if (count == 2) {
        count = 0;
    } else {
        count += 1;
    }

    changePage(pressBtn);
});
let newWidth = 0;
let oldWidth = widthBlock;
function changePage(move) {
    if (move) {
        newWidth += 10;
        oldWidth -= 10;
        page[count].style.width = newWidth + 'px';
        if (count - 1) {
            page[count - 1].style.width = oldWidth + 'px';
        } else if (count - 1 == 2) {
            page[0].style.width = oldWidth + 'px';
        }
    } else {
        newWidth -= 10;
        oldWidth += 10;
        page[count].style.width = newWidth + 'px';
        if (count + 1) {
            page[count + 1].style.width = oldWidth + 'px';
        } else if (count + 1 == 2) {
            page[0].style.width = oldWidth + 'px';
        }
    }


    // следующий шаг анимации
    requestAnimationFrame(changePage);
    //остановка если достигнут результат
    if (page[count].offsetWidth == widthBlock) {
        cancelAnimationFrame(changePage);
    }
}

function parallaxMove() {
    const parallaxElement = document.querySelector('.parallax');

    function parallaxEffect() {
        // Получаем текущую позицию прокрутки страницы
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Рассчитываем смещение фона в зависимости от прокрутки
        const translateY = scrollTop * 0.5; // Коэффициент параллакса

        // Применяем смещение через CSS
        parallaxElement.style.transform = `translate3d(0, ${translateY}px, 0)`;

        // Продолжаем обновление через requestAnimationFrame
        requestAnimationFrame(parallaxEffect);
    }

    // Запускаем эффект
    requestAnimationFrame(parallaxEffect);
}

// вызов анимации по первой задаче
animate();
//Вызов анимации по второй задаче
spiral();
//Вызов анимации параллакс
parallaxMove()