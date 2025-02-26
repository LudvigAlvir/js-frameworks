let cartArray = [
  { id: 1, quantity: 1, price: 49.99 },
  { id: 2, quantity: 1, price: 49.99 },
  { id: 3, quantity: 2, price: 49.99 },
];

function addToCartArray(id) {
  if (cartArray.find((product) => product.id === id)) {
    cartArray = cartArray.map((product) => {
      if (product.id === id) {
        product.quantity++;
      }
      return product;
    });
  } else {
    cartArray.push({ id: id, quantity: 1 });
  }
}

function removeFromCartArray(id) {
  cartArray = cartArray
    .map((product) => {
      if (product.id === id) {
        product.quantity--;
      }
      return product;
    })
    .filter((product) => product.quantity > 0);
}

function getSumOfArray() {
  return cartArray.reduce(
    (sum, product) => (sum += product.price * product.quantity),
    0
  );
}

/* 
Example of chaining:
const arr = [1, 2, 3];
arr.map((num) => num * 2).filter((num) => num > 5);
*/
const cartObject = {
  1: { quantity: 1, price: 49.99 },
  2: { quantity: 1, price: 49.99 },
  3: { quantity: 1, price: 49.99 },
};

function addToCartObject(id) {
  if (cartObject[id]) {
    cartObject[id].quantity++;
  } else {
    cartObject[id] = { quantity: 1 };
  }
}
function removeFromCartObject(id) {
  if (cartObject[id].quantity > 1) {
    cartObject[id].quantity--;
  } else {
    delete cartObject[id];
  }
}
function getSumOfObject() {
  let sum = 0;
  for (const key in cartObject) {
    sum += cartObject[key].price * cartObject[key].quantity;
  }
  return sum;
}

/* addToCartObject(1);
addToCartObject(4);
console.log(cartObject); */

// Create function for removing a product from cartArray
// and a function for removing from cartObject
