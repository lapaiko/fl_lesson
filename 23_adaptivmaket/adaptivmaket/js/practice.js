//**********************************************
//*                Меню Бургер                

// Бургер-кнопка  
const headerBurger = document.querySelector('.header__burger');
// Бургер-вікно
const headerMenu = document.querySelector('.header__menu');

// Первіряємо наявність Бургер-кнопки
if (headerBurger) {
	// Бургер-кнопка - додаємо подію click
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}