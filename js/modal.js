
(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('#contactModal'),
    };

    if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.modal.addEventListener('click', (e) => {
        if (e.target === refs.modal) {
            toggleModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
            toggleModal();
        }
    });

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
        document.body.classList.toggle('modal-open');
    }
})();