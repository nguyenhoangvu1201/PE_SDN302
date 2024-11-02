# To-Do API

## Mô Tả

Đây là một API To-Do đơn giản được xây dựng bằng Node.js và Express, sử dụng MongoDB để lưu trữ dữ liệu.

## Yêu Cầu

- Node.js
- MongoDB

## Hướng Dẫn Cài Đặt


``bash
npm install

Cấu Hình Kết Nối Cơ Sở Dữ Liệu Tạo một file .env tại thư mục gốc của dự án với nội dung như sau:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.gufrf.mongodb.net/
PORT=4000

MONGO_URI: Địa chỉ kết nối đến MongoDB của bạn. Thay thế <username> và <password> bằng thông tin đăng nhập của bạn.
PORT: Cổng mà ứng dụng sẽ chạy (mặc định là 4000).
Khởi Động Dịch Vụ MongoDB Nếu bạn sử dụng MongoDB cục bộ, hãy đảm bảo rằng dịch vụ MongoDB đang chạy. Nếu bạn sử dụng MongoDB Atlas, hãy đảm bảo rằng bạn đã cấp quyền truy cập cho địa chỉ IP của bạn.

Chạy Ứng Dụng
``bash
node src/server.js
Khi server đang chạy, bạn sẽ thấy thông báo:

Server running at http://localhost:4000
Connected to MongoDB
API Endpoints

            ### info
            1. Info của tôi
            Method: GET
            URL: /info
            2. Birthday to calculate years old
            Method: POST
            URL: /age
            Body: 
            json

                {
                    "birthYear": 2003
                }

1. Lấy tất cả To-Do items
Method: GET
URL: /todos

2. Lấy To-Do items by id
Method: GET
URL: /todos/:id

3. Tạo một To-Do item mới
Method: POST
URL: /todos
Body:
json

    {
        "title": "Mua sắm",
        "description": "Sữa, Bánh mì, Trứng",
        "completed": false
    }

4. Cập nhật một To-Do item
Method: PUT
URL: /todos/:id
Body:
json

    {
        "title": "Mua sắm",
        "description": "Sữa, Bánh mì, Trứng",
        "completed": true
    }

5. Xóa một To-Do item
Method: DELETE
URL: /todos/:id

### Ghi Chú
Đảm bảo rằng bạn đã cài đặt MongoDB và cấu hình đúng trước khi chạy ứng dụng.
Nếu có bất kỳ lỗi nào khi khởi động hoặc kết nối đến cơ sở dữ liệu, hãy kiểm tra lại thông tin trong file .env và đảm bảo rằng MongoDB đang chạy.

### Hướng Dẫn

- **Thay thế** `your_username`, `your_repository`, và `your_email@example.com` bằng thông tin thực tế của bạn.