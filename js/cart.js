// carts
const carts = [
 { count: 1, price: 249.99 },
 { count: 1, price: 120.00 },
 { count: 1, price: 239.99 },
]

// return total price
function calcTotalPrice() {
  return carts.reduce((total, item) => total += item.price * item. count, 0).toFixed(2);
}

// get total price
const totalPrice = document.getElementById("total_price");

// get cart items
const cartItems = document.querySelectorAll(".cart-item");
for (let i = 0; i < cartItems.length; i++) {
  const plus = cartItems[i].querySelector('.plus');
  const reduce = cartItems[i].querySelector('.reduce');
  const num = cartItems[i].querySelector('.num');

  // add plus button click event listener
  plus.addEventListener("click", function() {
    // max count is 99
    if (carts[i].count < 99) {
      carts[i].count++;
      num.textContent = carts[i].count;
      totalPrice.textContent = calcTotalPrice();
    }
  });

  // add reduce button click event listener
  reduce.addEventListener("click", function() {
    // min count is 1
    if (carts[i].count > 1) {
      carts[i].count--;
      num.textContent = carts[i].count;
      totalPrice.textContent = calcTotalPrice();
    }
  });
}
