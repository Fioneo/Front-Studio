document.addEventListener("DOMContentLoaded", function () {
    const menuBtnRef = document.getElementById("mobileButton");
    const mobileMenuRef = document.getElementById("mobileMenu");
    const body = document.body; // Получаем body

    menuBtnRef.addEventListener("click", function () {
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef.classList.toggle("is-open");
        
        // Если меню открыто – убираем скролл
        if (mobileMenuRef.classList.contains("is-open")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto"; // Возвращаем прокрутку
        }
    });
});
