const menuToggle = document.getElementById('menuToggle');
const sidePanel = document.getElementById('sidePanel');
const overlay = document.getElementById('overlay');
const closeIcon = document.getElementById('closeIcon');
const blurerfyer = document.getElementById('panel-side');

menuToggle.addEventListener('click', function() {
	sidePanel.classList.toggle('menu-open');
	menuToggle.style.display = 'none'; // Hide hamburger icon
	blurerfyer.style.display = '';
});

overlay.addEventListener('click', function() {
	sidePanel.classList.remove('menu-open');
	menuToggle.style.display = 'block'; // Show hamburger icon
	blurerfyer.style.display = 'none';
});

closeIcon.addEventListener('click', function() {
	sidePanel.classList.remove('menu-open');
	menuToggle.style.display = 'block'; // Show hamburger icon
	blurerfyer.style.display = 'none';
});

// blurerfyer.addEventListener('click', function() {
// 	sidePanel.classList.remove('menu-open');
// 	menuToggle.style.display = 'block'; // Show hamburger icon
// 	blurerfyer.style.display = 'none';
// });