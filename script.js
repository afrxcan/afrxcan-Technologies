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

if (searchInput) {
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
}

// Cart Counter
let cartCount = 0;
const cartCountDisplay = document.getElementById('cartCount');

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        if (cartCountDisplay) cartCountDisplay.textContent = cartCount;
        
        // Button Feedback
        const originalText = btn.textContent;
        btn.textContent = 'Added ✓';
        btn.classList.add('btn-added');
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('btn-added');
        }, 1200);
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link or the overlay itself
    navMenu.addEventListener('click', (e) => {
        if (e.target === navMenu || e.target.tagName === 'A') {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}