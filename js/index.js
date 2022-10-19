// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let cartPrice = price * quantity;
  subtotal.textContent = cartPrice;

  return cartPrice;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const total = document.querySelector('#total-value span');
  let sum = 0;
  for (product of products) {
    sum += updateSubtotal(product);
  }
  total.textContent = sum;
}

// ITERATION 4
// Sorry about this ridiculous code, but at least it works...
function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode.parentNode;
  parent.removeChild(target.parentNode.parentNode);
  calculateAll();
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('[type="text"]').value;
  const newProductPrice = document.querySelector(
    '.create-product [type="number"]'
  ).value;
  const template = document.querySelector('#template');
  const tbody = document.querySelector('tbody');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.name span').textContent = newProductName;
  clone.querySelector('.price span').textContent = newProductPrice;
  clone.querySelector('.btn-remove').addEventListener('click', removeProduct);

  tbody.appendChild(clone);
}

window.addEventListener('load', () => {
  const removeButtons = document.querySelectorAll('.btn-remove');
  const createBtn = document.querySelector('#create');
  const calculatePricesBtn = document.getElementById('calculate');

  createBtn.addEventListener('click', () => {
    createProduct();
  });

  calculatePricesBtn.addEventListener('click', calculateAll);
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
});
