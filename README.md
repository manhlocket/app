# Cài đặt iPhone — PWA mô phỏng

Trang web tĩnh mô phỏng giao diện Cài đặt trên iPhone 17 Pro Max. Mã nguồn gồm HTML, CSS, JavaScript và không cần bước build. Các công tắc và lựa chọn trong trang là trạng thái mô phỏng, được lưu trong trình duyệt; trang web không thể đọc hoặc thay đổi cài đặt hệ thống iOS.

## Đưa lên GitHub Pages

1. Tạo repository GitHub và tải **toàn bộ các tệp trong thư mục này** lên thư mục gốc của repository (bao gồm thư mục `icons`).
2. Trong **Settings → Pages**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi lưu.
3. Mở URL GitHub Pages qua **Safari trên iPhone**. URL HTTPS là điều kiện để service worker hoạt động.
4. Chạm **Chia sẻ → Thêm vào Màn hình chính**, bật **Mở dưới dạng ứng dụng web** nếu tùy chọn này xuất hiện, rồi chạm **Thêm**.

Để tùy chỉnh tên hiển thị hoặc biểu tượng, chỉnh `index.html`, `manifest.webmanifest` và các tệp trong `icons/`. Mỗi lần phát hành thay đổi, tăng tên cache trong `sw.js` để cập nhật bản offline.

## Kiểm tra nhanh tại máy tính

Tại thư mục này chạy `python3 -m http.server 8000`, rồi mở `http://localhost:8000`. Trên iPhone, dùng URL HTTPS đã triển khai để thêm vào Màn hình chính.
