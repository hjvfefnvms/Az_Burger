// Preloader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000); 
});

// AOS init
AOS.init({
    duration: 700,
    once: true
});

// Filtering logikasi
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Aloqa oynasi
// Aloqa oynasi
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const productName = e.target.parentElement.parentElement.querySelector('h3').innerText;
        
        // Mana bu yerda qavslar o'rniga backtick (`) ishlatildi
        alert(`${productName} buyurtma berish uchun qo'ng'iroq qiling:
+998 97 703-74-73
+998 99 658-44-54`);
    });
});