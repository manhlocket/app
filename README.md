# Cài đặt iPhone — PWA mô phỏng

Trang web tĩnh mô phỏng giao diện Cài đặt trên iPhone 17 Pro Max theo bộ ảnh tham chiếu, mặc định ở chế độ tối. Mã nguồn gồm HTML, CSS, JavaScript và không cần bước build. Trên iPhone, trang dùng phông San Francisco do iOS cung cấp qua `-apple-system`; kích thước chữ và cách xuống dòng đã được chỉnh để tránh tràn ở những hàng có tên hoặc số liệu dài. Trình duyệt ngoài iOS dùng phông dự phòng nên hình chữ có thể khác. Trang không vẽ thanh trạng thái giả; khi mở từ Màn hình chính, iOS tự hiển thị thanh trạng thái hệ thống. Các công tắc và lựa chọn trong trang là trạng thái mô phỏng, được lưu trong trình duyệt; trang web không thể đọc hoặc thay đổi cài đặt hệ thống iOS. Những số liệu được thể hiện trong 44 ảnh mới đã được nhập ở các màn hình tương ứng. Các màn hình chưa có ảnh tham chiếu cần được cung cấp thêm để đối chiếu từng mục. Ảnh tham chiếu ở các nhóm khác nhau ghi số liệu của thiết bị chụp; bản web áp dụng bố cục linh hoạt trên iPhone 17 Pro Max. Các mã định danh thiết bị và mật khẩu được che sẵn để tránh lộ khi tải mã nguồn lên GitHub; chạm vào từng dòng để điền trên máy, dữ liệu chỉ lưu cục bộ.

Biểu tượng Wi-Fi ở trang chính và trang chi tiết được hiển thị trực tiếp bằng ảnh cắt từ ảnh tham chiếu; các biểu tượng sẵn có trong màn hình có ảnh tham chiếu nằm tại `assets/sprites/`; màn hình Trợ năng và Apple Intelligence & Siri dùng ảnh chụp tham chiếu trong `assets/reference-*.png` để hiển thị đúng biểu tượng. Khi tải gói lên GitHub công khai, các ảnh này cũng sẽ được công khai. Bộ icon “iOS 26 by Kev” chưa được đưa vào mã nguồn vì tệp ZIP từ liên kết Dropbox chưa đọc được trong phiên này; các biểu tượng khác vẫn dùng SVG. Mục báo dung lượng iCloud gần đầy và hai mục hoàn tất sửa chữa đã được bỏ theo yêu cầu. Các trang đã mở được giữ trong bộ nhớ khi chuyển trang để hiển thị lại ngay và giữ vị trí cuộn khi quay lại. Chạm mục để chuyển trang từ phải sang trái; vuốt từ mép trái sang phải hoặc chạm nút quay lại để về trang trước.

## Đưa lên GitHub Pages

1. Tạo repository GitHub và tải **toàn bộ các tệp trong thư mục này** lên thư mục gốc của repository (bao gồm thư mục `icons`).
2. Trong **Settings → Pages**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi lưu.
3. Mở URL GitHub Pages qua **Safari trên iPhone**. URL HTTPS là điều kiện để service worker hoạt động.
4. Chạm **Chia sẻ → Thêm vào Màn hình chính**, bật **Mở dưới dạng ứng dụng web** nếu tùy chọn này xuất hiện, rồi chạm **Thêm**.

Để tùy chỉnh tên hiển thị hoặc biểu tượng, chỉnh `index.html`, `manifest.webmanifest` và các tệp trong `icons/`. Mỗi lần phát hành thay đổi, tăng tên cache trong `sw.js` để cập nhật bản offline.

## Kiểm tra nhanh tại máy tính

Tại thư mục này chạy `python3 -m http.server 8000`, rồi mở `http://localhost:8000`. Trên iPhone, dùng URL HTTPS đã triển khai để thêm vào Màn hình chính.
