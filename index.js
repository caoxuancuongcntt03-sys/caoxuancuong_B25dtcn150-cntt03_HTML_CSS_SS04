let loginAttempts = 0;
let isAuthenticated = false;

// ===== 1. ĐĂNG NHẬP =====
while (loginAttempts < 3) {
  let username = prompt("Mời bạn nhập tài khoản:");
  let password = prompt("Mời bạn nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    loginAttempts++;
    let remaining = 3 - loginAttempts;

    if (username !== "admin" && password !== "12345") {
      alert(`Sai cả tài khoản và mật khẩu! Còn ${remaining} lần.`);
    } else if (username !== "admin") {
      alert(`Sai tài khoản! Còn ${remaining} lần.`);
    } else {
      alert(`Sai mật khẩu! Còn ${remaining} lần.`);
    }
  }
}

if (!isAuthenticated) {
  alert("Tài khoản đã bị khóa!");
} else {

  // ===== 2. MENU CHÍNH =====
  let choice;

  do {
    let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
    menu += "1. Phân loại mã số sách\n";
    menu += "2. Thiết kế sơ đồ kho\n";
    menu += "3. Dự toán phí bảo trì\n";
    menu += "4. Tìm mã sách may mắn\n";
    menu += "5. Thoát\n";
    menu += "Nhập lựa chọn:";

    choice = Number(prompt(menu));

    switch (choice) {

      // ===== CHỨC NĂNG 1 =====
      case 1:
        let totalBooks = 0;
        let evenBooks = 0;
        let oddBooks = 0;

        alert("Nhập mã sách (0 để dừng)");

        while (true) {
          let bookId = Number(prompt("Nhập mã:"));

          if (isNaN(bookId)) {
            alert("Phải nhập số!");
            continue;
          }

          if (bookId === 0) break;

          totalBooks++;

          if (bookId % 2 === 0) evenBooks++;
          else oddBooks++;
        }

        console.log("--- KẾT QUẢ ---");
        console.log("Tổng:", totalBooks);
        console.log("Chẵn:", evenBooks);
        console.log("Lẻ:", oddBooks);
        alert("Xem kết quả tại Console");
        break;


      // ===== CHỨC NĂNG 2 =====
      case 2:
        let rows = Number(prompt("Nhập số hàng:"));
        let cols = Number(prompt("Nhập số cột:"));

        if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
          alert("Dữ liệu không hợp lệ!");
          break;
        }

        console.log(`--- Sơ đồ kho ${rows}x${cols} ---`);

        for (let i = 1; i <= rows; i++) {
          let rowLayout = "";

          for (let j = 1; j <= cols; j++) {
            let pos = `[${i}-${j}]`;

            if (i === j) pos += "(Ưu tiên)";

            rowLayout += pos + " ";
          }

          console.log(rowLayout);
        }

        alert("Đã in ra Console");
        break;


      // ===== CHỨC NĂNG 3 =====
      case 3:
        let quantity = Number(prompt("Số lượng sách:"));
        let cost = Number(prompt("Phí bảo trì 1 cuốn:"));
        let years = Number(prompt("Số năm:"));

        if (isNaN(quantity) || isNaN(cost) || isNaN(years)) {
          alert("Dữ liệu phải là số!");
          break;
        }

        console.log("--- DỰ TOÁN ---");

        for (let year = 1; year <= years; year++) {
          let totalCost = quantity * cost;

          console.log(`Năm ${year}: ${totalCost.toLocaleString()} VNĐ`);

          cost *= 1.1;
        }

        alert("Xem bảng dự toán trong Console");
        break;


      // ===== CHỨC NĂNG 4 =====
      case 4:
        let n = Number(prompt("Kiểm tra từ 1 đến N:"));

        if (isNaN(n) || n <= 0) {
          alert("N phải > 0");
          break;
        }

        let luckyCount = 0;
        let luckyList = "";

        for (let i = 1; i <= n; i++) {
          if (i % 3 === 0 && i % 5 !== 0) {
            luckyList += i + " ";
            luckyCount++;
          }
        }

        console.log(luckyList || "Không có");
        console.log("Tổng:", luckyCount);

        alert(`Tìm thấy ${luckyCount} mã may mắn`);
        break;


      // ===== THOÁT =====
      case 5:
        alert("Đăng xuất...");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }

  } while (choice !== 5);
}
