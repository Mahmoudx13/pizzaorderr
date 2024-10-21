document.getElementById("button").addEventListener("click", PlaceOrder);
function PlaceOrder() {
  let size = prompt("Enter Size of the pizza (small, Med, Large):");
  let topping1 = prompt("Enter fist topping:");
  let topping2 = prompt("Enter second topping:");
  let msg = `Your order ${size} pizza with ${topping1} and ${topping2} will be searved soon!`;

  alert(msg);
}
