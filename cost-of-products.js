'use strict';

const productCart = [
	{ productname:'iphone-x',qty:10, price:1000 },
	{ productname:'macbook pro',qty:200, price:2000},
	{ productname:'iwatch',qty:100, price:550 },
	{ productname:'macbook air',qty:100, price:1000},
	{ productname:'iphone 8',qty:300, price:700 },
	{ productname:'iphone 7',qty:100, price:550 },
	{ productname:'ipad Retina',qty:20, price:1000},
	{ productname:'ipad', qty:10, price:700 },
	{ productname:'Magic Mouse',qty:50, price:300},
	{ productname:'Magic Trackpad',qty:75, price:200}
];

function getCostOfProductForQtyGreaterThan(n) {
	if (typeof n !== 'number') {
		throw new Error(`${getCostOfProductForQtyGreaterThan.name}'s argumnent must be a Number`);
	}
	
	return productCart.reduce((res, item) => {
		const quantity = item.qty || 0;
		const price = item.price || 0;

		return quantity > n ? res + price * quantity : res;
	}, 0);
}

function getCostOfProduct(productName) {
	if (typeof productName !== 'string') {
		throw new Error(`${getCostOfProduct.name}'s argumnent must be a String`);
	}
	
	return productCart.reduce((res, item) => {
		const quantity = item.qty || 0;
		const price = item.price || 0;

		return productName.toLowerCase() === item.productname.toLowerCase()
			? res + price * quantity
			: res;
	}, 0);
}

module.exports = {
	getCostOfProductForQtyGreaterThan,
	getCostOfProduct
};
