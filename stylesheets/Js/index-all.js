$(document).ready(function () {
	$('.hamburger-shell').click(function () {
		$('#menu').slideToggle();
	});
});




/*首頁*/
var content = document.querySelector('.content');
var commodity = [{
	picture: 'https://upload.cc/i1/2020/06/12/coDjMJ.jpg',
	name: '旋轉馬克杯',
	price: 'NT$450',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/N3cYlg.jpg',
	name: '隨意方便貼',
	price: 'NT$150',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/HBQyCP.jpg',
	name: '創意插卡',
	price: '<del>NT$300</del>',
	sola: 'NT$100'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/r4YMpl.jpg',
	name: '情人餐具套組',
	price: 'NT$1000',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/UgQebh.jpg',
	name: '懶人衣架',
	price: 'NT$550',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/0YXalw.jpg',
	name: '皮夾卡片',
	price: '<del>NT$500</del>',
	sola: 'NT$200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/3oepwI.jpg',
	name: '白色玫瑰花束',
	price: 'NT$750',
	sola: ''
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}, {
	picture: 'https://upload.cc/i1/2020/06/23/WCwiHh.jpg',
	name: '護手霜BB膏',
	price: '<del>NT$2000</del>',
	sola: 'NT$1200'
}];
pagination(commodity, 1)
function pagination(commoditydata, nowPage) {
	const dataTotal = commodity.length;
	const perpage = 8;
	const pageTotal = Math.ceil(dataTotal / perpage);
	console.log(`全部資料:${dataTotal} 每一頁顯示:${perpage}筆 總頁數:${pageTotal}`);
	let currentPage = nowPage;

	if (currentPage > pageTotal) {
		currentPage = pageTotal
	}

	const minData = (currentPage * perpage) - perpage + 1;
	const maxData = (currentPage * perpage);

	const data = [];
	commodity.forEach((item, index) => {
		const num = index + 1;
		if (num >= minData && num <= maxData) {
			data.push(item)
		}
		const page = {
			pageTotal,
			currentPage,
			hasPage: currentPage > 1,
			hasNext: currentPage < pageTotal,
		}
		displayData(data);
		pageBtn(page);
		function displayData(data) {
			let str = '';
			data.forEach((item) => {
				str += `<div class="col-md-6 col-sm-6 col-lg-3 mt-4">
				  <div class="card-deck h-100">
					<div class="card border-0 bg-lightpink">
						  <img src="${item.picture}" class="card-img-top rounded-0"
						  alt="...">
						  <h5 class="card-title text-danger mt-3">${item.name}</h5>
						  <p class="card-text mb-0">${item.price}</p>
						  <p class="card-text text-danger">${item.sola}</p>
						  <a href="shopp-all.html" class="commodity-items"></a>						
					 </div>
					</div>
				</div>`;
			});
			content.innerHTML = str;
		};
	});
}
function pageBtn(page) {
	let str = '';
	const total = page.pageTotal;

	if (page.hasPage) {
		str += `<li class="page-item"><a class="page-link" href="#" aria-label="Previous" data-page="${Number(page.currentPage) - 1}"><span aria-hidden="true">&laquo;</span></a></li>`;
	} else {
		str += `<li class="page-item disabled"></li>`;
	}


	for (let i = 1; i <= total; i++) {
		if (Number(page.currentPage) === i) {
			str += `<li class="page-item active"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
		} else {
			str += `<li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
		}
	};

	if (page.hasNext) {
		str += `<li class="page-item"><a class="page-link" href="#" aria-label="Next" data-page="${Number(page.currentPage) + 1}"><span aria-hidden="true">&raquo;</span></a></li>`;
	} else {
		str += `<li class="page-item disabled"></li>`;
	}

	pageid.innerHTML = str;
}
function switchPage(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'A') return;
	const page = e.target.dataset.page;
	pagination(commodity, page);
}
pageid.addEventListener('click', switchPage);



var shoppingCart = (function() {
	// =============================
	// Private methods and propeties
	// =============================
	cart = [];
	
	// Constructor
	function Item(name, price, count,) {
	  this.name = name;
	  this.price = price;
	  this.count = count;
	}
	
	// Save cart
	function saveCart() {
	  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
	}
	
	  // Load cart
	function loadCart() {
	  cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
	}
	if (sessionStorage.getItem("shoppingCart") != null) {
	  loadCart();
	}
	
  
	// =============================
	// Public methods and propeties
	// =============================
	var obj = {};
	
	// Add to cart
	obj.addItemToCart = function(name, price, count) {
	  for(var item in cart) {
		if(cart[item].name === name) {
		  cart[item].count ++;
		  saveCart();
		  return;
		}
	  }
	  var item = new Item(name, price, count);
	  cart.push(item);
	  saveCart();
	}
	// Set count from item
	obj.setCountForItem = function(name, count) {
	  for(var i in cart) {
		if (cart[i].name === name) {
		  cart[i].count = count;
		  break;
		}
	  }
	};
	// Remove item from cart
	obj.removeItemFromCart = function(name) {
		for(var item in cart) {
		  if(cart[item].name === name) {
			cart[item].count --;
			if(cart[item].count === 0) {
			  cart.splice(item, 1);
			}
			break;
		  }
	  }
	  saveCart();
	}
  
	// Remove all items from cart
	obj.removeItemFromCartAll = function(name) {
	  for(var item in cart) {
		if(cart[item].name === name) {
		  cart.splice(item, 1);
		  break;
		}
	  }
	  saveCart();
	}
  
	// Clear cart
	obj.clearCart = function() {
	  cart = [];
	  saveCart();
	}
  
	// Count cart 
	obj.totalCount = function() {
	  var totalCount = 0;
	  for(var item in cart) {
		totalCount += cart[item].count;
	  }
	  return totalCount;
	}
  
	// Total cart
	obj.totalCart = function() {
	  var totalCart = 0;
	  for(var item in cart) {
		totalCart += cart[item].price * cart[item].count+60.00;
	  }
	  return Number(totalCart.toFixed(2));
	}
  
	// List cart
	obj.listCart = function() {
	  var cartCopy = [];
	  for(i in cart) {
		item = cart[i];
		itemCopy = {};
		for(p in item) {
		  itemCopy[p] = item[p];
  
		}
		itemCopy.total = Number(item.price * item.count).toFixed(2);
		cartCopy.push(itemCopy)
	  }
	  return cartCopy;
	}
  
	// cart : Array
	// Item : Object/Class
	// addItemToCart : Function
	// removeItemFromCart : Function
	// removeItemFromCartAll : Function
	// clearCart : Function
	// countCart : Function
	// totalCart : Function
	// listCart : Function
	// saveCart : Function
	// loadCart : Function
	return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
	event.preventDefault();
	var name = $(this).data('name');
	var price = Number($(this).data('price'));
	shoppingCart.addItemToCart(name, price, 1);
	displayCart();
  });
  
  // Clear items
$('.clear-cart').click(function() {
	shoppingCart.clearCart();
	displayCart();
  });
  
  
  function displayCart() {
	var cartArray = shoppingCart.listCart();
	var output = "";
	for(var i in cartArray) {
	  output += "<tr>"
		+"<th class='text-th'>商品名稱</th>"
		+"<th class='text-th text-center number-text'>數量</th>"
        +"<th class='text-th text-right text_p__one'>單價</th>"
		+"<th class='text-th text-right'>小計</th>"
		+"<th class='text-th'></th>"
		+"</tr>"
		+ "<td class='text-td pt-2' >" + cartArray[i].name + "</td>" 
		+ "<td class='text-center'><div class='input-group pt-2'><button class='minus-item input-group-addon btn btn-primary btn-num '  data-name=" + cartArray[i].name + ">-</button>"
		+ "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
		+ "<button class='plus-item btn btn-primary input-group-addon btn-num' data-name=" + cartArray[i].name + ">+</button></div></td>"
		+ " = " 
		+ "<td class='pt-2 text-right text_p__one'>(" +'NT$'+ cartArray[i].price + ")</td>"
		+ "<td class='pt-2 text-right'>"+ cartArray[i].total + "</td>" 
		+ "<td class='text-right pt-2'><button class='delete-item btn btn-outline-danger btn-delete' data-name=" + cartArray[i].name +"><i class='fas fa-trash-alt'></i></button></td>"
		+  "</tr>"
		+"<tr>"
		+"<td class='text-td pt-2' >" + '運費' + "</td>" 
		+"<td class='text-td text-center pt-2' >" +'1'+ "</td>"
		+"<td class='text-td text-right pt-2 text_p__one'>" + '(NT$60)' + "</td>"
		+"<td class='text-td text-right pt-2' >" + '60.00' + "</td>"
		+"<td class='text-td text-right pt-2' >"  + "</td>"
		+  "</tr>";
	}
	$('.show-cart').html(output);
	$('.total-cart').html(shoppingCart.totalCart());
	$('.total-count').html(shoppingCart.totalCount());
  }
  
  $('.show-cart').on("click", ".delete-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.removeItemFromCartAll(name);
	displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.removeItemFromCart(name);
	displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
	var name = $(this).data('name')
	shoppingCart.addItemToCart(name);
	displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
	 var name = $(this).data('name');
	 var count = Number($(this).val());
	shoppingCart.setCountForItem(name, count);
	displayCart();
  });
  
  displayCart();


  $(document).ready(function () {
	var count = 0;
	$(".add-to-cart2").click(function (event) {
		count++;
		$(".add-to-cart2").addClass("size");
		setTimeout(function () {
			$(".add-to-cart2").addClass("hover");
		}, 200);
		setTimeout(function () {
			$(".cart2 > span").addClass("counter");
			$(".cart2 > span.total-count").text(count);
		}, 400);
		setTimeout(function () {
			$(".add-to-cart2").removeClass("hover");
			$(".add-to-cart2").removeClass("size");
		}, 600);
		event.preventDefault();
	});
});
  

