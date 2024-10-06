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

animate();