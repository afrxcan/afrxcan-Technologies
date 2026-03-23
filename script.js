// Intersection Observer for Scroll Entrance
const observerOptions = { threshold: 0.1 };
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => cardObserver.observe(card));

// Search Filter
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    let found = false;

    productCards.forEach(card => {
        const name = card.querySelector('.card-name').textContent.toLowerCase();
        if (name.includes(term)) {
            card.classList.remove('hidden');
            found = true;
        } else {
            card.classList.add('hidden');
        }
    });
    
    document.getElementById('noResults').classList.toggle('hidden', found);
});

// Cart Counter
let cartCount = 0;
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cartCount').textContent = cartCount;
        
        // Button Feedback
        const originalText = btn.textContent;
        btn.textContent = 'Added ✓';
        btn.style.background = 'var(--gold)';
        btn.style.color = '#000';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 1200);
    });
});