
(() => {
    const filterButtons = document.querySelectorAll('.filter__button');
    const projectItems = document.querySelectorAll('.projects__item');

    if (!filterButtons.length || !projectItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('filter__button--active');
            });

            button.classList.add('filter__button--active');

            const filterCategory = button.textContent.trim().toLowerCase();

            projectItems.forEach(item => {
                const category = item.querySelector('.projects__category').textContent.trim().toLowerCase();
                
                // Если выбрана категория "All" или категория проекта совпадает с выбранной категорией
                if (filterCategory === 'all' || category === filterCategory) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    projectItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
    });
})(); 