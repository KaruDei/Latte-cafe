let FoodBtn = document.getElementById('Food_btn');
let DrinksBtn = document.getElementById('Drinks_btn');
let TakeawayBtn = document.getElementById('Takeaway_btn');
let imgMenu = document.getElementById('Booking');
let menu = document.getElementById('menu');
let buttons = document.querySelectorAll('.menu_block_button');

buttons.forEach(function(btn) {
	btn.addEventListener('click', function() {
	  buttons.forEach(function(btn) {
		 btn.classList.remove('active');
	  });
	  this.classList.add('active');
	});
});

FoodBtn.addEventListener('click', () => {
	menu.innerHTML = `
		<img src="assets/img/IMAGE (1).jpg" alt="">
	`;
});

DrinksBtn.addEventListener('click', () => {
	menu.innerHTML = `
		<img src="assets/img/menu2.png" alt="">
	`;
});

TakeawayBtn.addEventListener('click', () => {
	menu.innerHTML = `
		<img src="assets/img/menu3.jpg" alt="">
	`;
});