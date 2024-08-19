document.addEventListener('DOMContentLoaded', function () {
    const pageElement = document.querySelector('[data-page]');
    const page = pageElement ? pageElement.getAttribute('data-page') : null;
    console.log(page);

    if (page === 'side-bar') {
        // Xử lý popup logout
        const logoutButton = document.getElementById('logoutButton');
        const confirmPopup = document.getElementById('confirmPopup');
        const confirmYes = document.getElementById('confirmYes');
        const confirmNo = document.getElementById('confirmNo');

        // Khi nhấn vào nút Log out, hiển thị popup
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            confirmPopup.classList.remove('hidden'); // Hiển thị popup
        });

        // Khi nhấn "Yes", thực hiện logout
        confirmYes.addEventListener('click', () => {
            confirmPopup.classList.add('hidden'); // Ẩn popup

            // Tạo một form ẩn để thực hiện yêu cầu POST
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = '/user/logout';

            // Thêm form vào body
            document.body.appendChild(form);

            // Gửi form để thực hiện yêu cầu POST
            form.submit();
        });

        // Khi nhấn "No", ẩn popup
        confirmNo.addEventListener('click', () => {
            confirmPopup.classList.add('hidden'); // Ẩn popup
        });
    }

});