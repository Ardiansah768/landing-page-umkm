document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Filter Menu
    const tabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Ubah style tab aktif
            tabs.forEach(t => {
                t.classList.remove('bg-amber-600', 'text-white', 'active');
                t.classList.add('bg-stone-200', 'text-stone-700');
            });
            tab.classList.remove('bg-stone-200', 'text-stone-700');
            tab.classList.add('bg-amber-600', 'text-white', 'active');

            // Filter item berdasarkan kategori
            const category = tab.getAttribute('data-category');

            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }
});