var dropburger_open = false;
const blurerfyer = document.getElementById('panel-side');

function open_dropburger() {
	document.getElementById("links").classList.toggle('burger_show');
	if (dropburger_open) {
		blurerfyer.style.display = 'none';
		dropburger_open = false
	} else {
		blurerfyer.style.display = '';
		dropburger_open = true
	}
}

//document.getElementById("miku-flip").onclick = open_dropburger;

blurerfyer.addEventListener('click', open_dropburger);