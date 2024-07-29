document.addEventListener('DOMContentLoaded', function () {
    const openLoginPopupButton = document.getElementById('login');
    const closeLoginPopupButton = document.getElementById('closeLoginPopup');
    const loginPopup = document.getElementById('loginPopup');

    openLoginPopupButton.addEventListener('click', () => {
        loginPopup.classList.remove('hidden');
    });

    closeLoginPopupButton.addEventListener('click', () => {
        loginPopup.classList.add('hidden');
    });

    // Đóng popup khi click bên ngoài vùng popup
    loginPopup.addEventListener('click', (event) => {
        if (event.target === loginPopup) {
            loginPopup.classList.add('hidden');
        }
    });

    // Xử lý sự kiện submit form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login successful!');
        loginPopup.classList.add('hidden');
    });
});