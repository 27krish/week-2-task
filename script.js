// Toggle Mobile Navigation
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Image Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        galleryItems.forEach(item => {
            item.style.display = (category === 'all' || item.getAttribute('data-category') === category) ? 'block' : 'none';
        });
    });
});

// Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    let query = this.value.toLowerCase();
    galleryItems.forEach(item => {
        let altText = item.querySelector('img').alt.toLowerCase();
        item.style.display = altText.includes(query) ? 'block' : 'none';
    });
});