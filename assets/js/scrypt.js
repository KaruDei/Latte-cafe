let FoodBtn = document.getElementById('Food_btn');
let DrinksBtn = document.getElementById('Drinks_btn');
let TakeawayBtn = document.getElementById('Takeaway_btn');
let imgMenu = document.getElementById('Booking');
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

	imgMenu.innerHTML = `
		<div class="img_items">
			<div class="d_img_item">
				<img src="assets/img/IMAGE (2).jpg" alt="#">
			</div>
			<div class="d_img_item">
				<img src="assets/img/IMAGE (3).jpg" alt="#">
			</div>
		</div>
		<div class="img_items">
			<div class="img_item">
				<img src="assets/img/IMAGE (4).jpg" alt="#">
			</div>
		</div>
	`;
});

DrinksBtn.addEventListener('click', () => {
	imgMenu.innerHTML = `
		<div class="img_items">
			<div class="d_img_item">
				<img src="assets/img/drinks1.jpeg" alt="#">
			</div>
			<div class="d_img_item">
				<img src="assets/img/drinks2.jpg" alt="#">
			</div>
		</div>
		<div class="img_items">
			<div class="img_item">
				<img src="assets/img/drinks3.jpeg" alt="#">
			</div>
		</div>
	`;
});

TakeawayBtn.addEventListener('click', () => {
	imgMenu.innerHTML = `
		<div class="img_items">
			<div class="d_img_item">
				<img src="assets/img/Takeaway1.png" alt="#">
			</div>
			<div class="d_img_item">
				<img src="assets/img/Takeaway2.png" alt="#">
			</div>
		</div>
		<div class="img_items">
			<div class="img_item">
				<img src="assets/img/Takeaway3.jpg" alt="#">
			</div>
		</div>
	`;
});