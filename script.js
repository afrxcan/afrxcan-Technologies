const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.product-card');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', function () {

  // Step 1: get search , lowercase it to make it case-insensitive
  const query = searchInput.value.toLowerCase();

  // Step 2 & 3 & 4: loop, check, show/hide
  cards.forEach(function (card) {
    const name = card.querySelector('.card-name').textContent.toLowerCase();

    if (name.includes(query)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Step 5: no results message if all cards are hidden
  const visibleCards = document.querySelectorAll('.product-card:not(.hidden)');

  if (visibleCards.length === 0) {
    noResults.classList.remove('hidden');
  } else {
    noResults.classList.add('hidden');
  }

});

let cart = [];
let cartCount = 0;

const cartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartCountDisplay = document.getElementById('cartCount');

cartButtons.forEach(function (button) {
  button.addEventListener('click', function () {
  });
});

const name = button.dataset.name;
const price = button.dataset.price;

// Add item to the array
cart.push({ name: name, price: price });

// Update the count
cartCount++;
cartCountDisplay.textContent = cartCount;

button.textContent = 'Added ✓';
button.style.borderColor = 'var(--gold-light)';
button.style.color = 'var(--gold-light)';

setTimeout(function () {
  button.textContent = 'Add to Cart';
  button.style.borderColor = '';
  button.style.color = '';
}, 1500);