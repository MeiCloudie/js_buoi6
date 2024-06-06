// Yêu cầu: thực hiện hiển thị 20 console.log với các nội dung tôi đang ở quận 1,2,3
let buocNhay = 1
// xử lý cho vòng lặp sẽ có lúc ngưng lại
while (buocNhay <= 20) {
  // 4 xử lý các yêu cầu từ người dùng
  console.log(`tôi đang ở quận ${buocNhay}`)

  // 3 tăng hoặc giảm biến bước nhảy
  buocNhay++
}

// Yêu cầu bài tập, tạo ra một chương trình giúp tính tổng các số chẵn từ 1 đến N do người dùng cung cấp
// Tạo thêm một thẻ div có sẵn một vài style như màu nền chữ và hiển thị bên dưới nút button
function tinhTongCacSoChan() {
  let soN = document.getElementById("soN").value * 1
  let tong = 0
  //   // 1. Khởi taoh biến bước nhảy
  //   let index = 1
  //   // 2. Tạo điều kiện  cho vòng lặp
  //   while (index <= soN) {
  //     // 4. Xử lý các hành động
  //     if (index % 2 == 0) {
  //       tong += index
  //     }

  //     // 3. Xử lý tăng hoặc giảm biến bước nhảy
  //     index++
  //   }

  let index = 2
  while (index <= soN) {
    tong += index
    index += 2
  }

  console.log(tong)
}

document.querySelector(".btn-dark").onclick = tinhTongCacSoChan

// Đếm xem trong khoảng từ 0 đến 1000 có bao nhiêu số chia hết cho 3
function demCacSoChiaHetCho3(soN) {
  let count = 0
  let i = 0
  do {
    if (i % 3 == 0) {
      count++
    }

    i++
  } while (i <= soN)
  console.log(count)
}
demCacSoChiaHetCho3(5000)

// Yêu cầu: tạo trên layout html 10 thẻ div, lưu ý các thẻ div nằm ở vị trí lẻ thì sẽ có màu đỏ còn các thẻ div chẵn thì sẽ có màu xanh nước
// document.getElementById("baiTap1").innerHTML +=
//   "<div class='bg-danger p-5'></div>"
// let content = ""
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     content += "<div class='bg-danger p-3'></div>"
//   } else {
//     content += "<div class='bg-primary p-3'></div>"
//   }
// }

// Cách 2 sử dụng cú pháp createElement
let baiTap1 = document.getElementById("baiTap1")

for (let i = 1; i <= 10; i++) {
  let theDiv = document.createElement("div")
  if (i % 2 == 1) {
    theDiv.className = "bg-danger p-3"
  } else {
    theDiv.className = "bg-primary p-3"
  }

  baiTap1.appendChild(theDiv)
}

// 1 triệu sản phẩm ==> 1 ==> chạy vòng lặp bên trong
// let dongNgoiSao = "* * * * *"
// let ketQua = ""
// for (let i = 1; i <= 30; i++) {
//   ketQua += dongNgoiSao + "<br>"
// }
// document.getElementById("baiTap2").innerHTML = ketQua

function taoNgoiSaoTamGiac(soDong) {
  let ketQua = ""
  for (let i = 1; i <= soDong; i++) {
    let dongNgoiSao = ""
    for (z = 1; z <= i; z++) {
      dongNgoiSao += "* "
    }
    ketQua += dongNgoiSao + "<br>"
  }

  return ketQua
}
document.getElementById("baiTap2").innerHTML = taoNgoiSaoTamGiac(100)
