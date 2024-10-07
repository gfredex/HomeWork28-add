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
// element2.style.left = 100 + 'px';
// element2.style.top = 200;

function spiral() {


    console.log(t);

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

// вызов анимации по первой задаче
animate();

spiral()