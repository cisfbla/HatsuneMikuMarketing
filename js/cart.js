var cart_list = document.getElementById("cart_list");


//this function, when called, will return a json of cart stuff
//everything in cart is stored in localstorage
function get_cart_contents() {
	var cart_contents = localStorage.getItem("cart_contents");
	if (cart_contents == null) {
		cart_contents = "[]";
	}
	return JSON.parse(cart_contents);
}

function makedollarformat(number) {
	var dollarformat = number.toFixed(2);
	return dollarformat
}

//if there is a id cart_list div, this function will fill it with all the stuff :3
function create_list() {
	var cart_contents = get_cart_contents();
	var cart_list = document.getElementById("cart_list");
	cart_list.innerHTML = "";

	var list_html = "";

	var cart_total = 0;
	for (var i = 0; i < cart_contents.length; i++) {
		var cart_item = cart_contents[i];
		var cart_item_name = cart_item["name"];
		var cart_item_img = cart_item["img"];
		var cart_item_price = cart_item["price"];
		var cart_item_quantity = cart_item["quantity"];

		cart_total += cart_item_price * cart_item_quantity;

		list_html += `<div class="cart_item">
  			<img src=${cart_item_img}>
	 		<div class="info">
	 		<h1>${cart_item_name}</h1>
			<p>$${cart_item_price}</p>
   			<input onchange="change_quant_item_cart_from_input(${i},'quantit${i}');create_list();" id="quantit${i}" value="${cart_item_quantity}" type="number">
	  		<button onclick="delete_item_cart(${i});create_list();">X</button>
	  		</div>
  </div>`
	}

	document.getElementById("totalmikurama").innerText = "$" + makedollarformat(cart_total);

	cart_list.innerHTML = list_html;
}

function add_to_cart(name, img, price, quantity) {
	var cart_contents = get_cart_contents();
	cart_contents.push({ "name": name, "img": img, "price": price, "quantity": quantity });
	localStorage.setItem("cart_contents", JSON.stringify(cart_contents));
}

function get_item_count_cart() {
	var cart_contents = get_cart_contents();
	return cart_contents.length;
}

function clear_cart() {
	localStorage.setItem("cart_contents", "[]");
}

//item value is the number of the cart_contents array so we can delete it
function delete_item_cart(item) {
	var cart_contents = get_cart_contents();
	cart_contents.splice(item, 1);
	localStorage.setItem("cart_contents", JSON.stringify(cart_contents));
}

function change_quant_item_cart_from_input(item, from) {
	var cart_contents = get_cart_contents();
	cart_contents[item].quantity = document.getElementById(from).value;
	localStorage.setItem("cart_contents", JSON.stringify(cart_contents));
}

function change_quant_item_cart(item, to) {
	var cart_contents = get_cart_contents();
	cart_contents[item].quantity = to;
	localStorage.setItem("cart_contents", JSON.stringify(cart_contents));
}

function update_quant_item_cart() {
	document.getElementById("cart_count").innerText = get_item_count_cart();
}

// add_to_cart("mini miku :3", "Source_Files/mikuPic1.png", 500, 2)

