function getID(id) {
  return document.getElementById(id);
}

function kiemTraKyTu(input, spanId, message, min, max) {
  if (input.length >= min && input.length <= max) {
    // Hop le
    getID(spanId).style.display = "none";
    getID(spanId).innerHTML = "";
    return true;
  }
  //K hop le
  getID(spanId).style.display = "block";
  getID(spanId).innerHTML = message;
  return false;
}

function kiemTraRong(input, spanId, message) {
  if (input === "") {
    getID(spanId).style.display = "block";
    getID(spanId).innerHTML = message;
    return false;
  }
  getID(spanId).style.display = "none";
  getID(spanId).innerHTML = "";
  return true;
}
getID("btnSinhNam").addEventListener("click", function() {
  var namSinh = getID("inputNamSinh").value;
  kiemTraRong(namSinh, "ketQuaNamSinh", "Không được rỗng");
  kiemTraKyTu(namSinh, "ketQuaNamSinh", "Không được rỗng và đúng 4 số", 1, 2);
  /**
   * 5 số đầu cộng lại chia 9, lấy số dư, chãn thì lấy số 9, 5 số cuối cộng lại chia 9, lấy số dư.
   * Hễ dư 5 thì nam là khôn (số 2) nữ là cấn (số 8)
   * Số quẻ khảm 1, khôn 2, chấn 3, tốn 4, số 5
   *  08563 61368
   *  (nam = khôn, nữ = cấn), càn số 6, đoài số 7, cấn 8, ly 9
   * 0859361368
   */
  var soCan = parseInt(
    namSinh[0] + namSinh[1] + namSinh[2] + namSinh[3] + namSinh[4]
  );
  let so1 = parseInt(namSinh[0]);
  let so2 = parseInt(namSinh[1]);
  let so3 = parseInt(namSinh[2]);
  let so4 = parseInt(namSinh[3]);
  let so5 = parseInt(namSinh[4]);
  let so6 = parseInt(namSinh[5]);
  let so7 = parseInt(namSinh[6]);
  let so8 = parseInt(namSinh[7]);
  let so9 = parseInt(namSinh[8]);
  let so10 = parseInt(namSinh[9]);
  let tongSODAU = so1 + so2 + so3 + so4 + so5;
  let tongSOCUOI = so6 + so7 + so8 + so9 + so10;
  const tongDau = tongSODAU-(parseInt((tongSODAU) / 9))*9;
  const tongCuoi =tongSOCUOI- (parseInt((tongSOCUOI) / 9))*9;
  const tongDong = (so1 + so2 + so3 + so4 + so5 + so6 + so7 + so8 + so9 + so10) % 6;

  console.log(tongDau);
  console.log(tongCuoi);
  console.log(tongDong);


const giaiQue = tongDau.toString() +tongCuoi.toString();


  //     tongDau = "";
  //    tongCuoi = "";
  switch (tongDau) {
    case 0:
      document.getElementById("hinhAnh").src = "./img/ly.jpg";

      break;
    case 1:
      document.getElementById("hinhAnh").src = "./img/kham.jpg";

      break;
    case 2:
      document.getElementById("hinhAnh").src = "./img/khon.jpg";

      break;
    case 3:
      document.getElementById("hinhAnh").src = "./img/chan.jpg";

      break;
    case 4:
      document.getElementById("hinhAnh").src = "./img/ton.jpg";

      break;
    case 5:
      //(nam = khôn, nữ = cấn)

      document.getElementById("hinhAnh").src = "./img/khon.jpg";

      break;
    case 6:
      document.getElementById("hinhAnh").src = "./img/can.jpg";

      break;
    case 7:
      document.getElementById("hinhAnh").src = "./img/doai.jpg";

      break;
    case 8:
      document.getElementById("hinhAnh").src = "./img/can1.jpg";

      break;
    case 9:
      document.getElementById("hinhAnh").src = "./img/ly.jpg";
      getID("loiGiai").innerHTML =
        "Trong số 12 con giáp, chuột được chọn và con vật tiên phong, dẫn đầu, bởi vậy những người thuộc tuổi này thường có tài năng lãnh đạo, quản lí rất tốt. Hơn nữa, những người tuổi Tý còn được mọi người ngưỡng mộ bởi sự thông minh, sáng tạo, nhanh nhẹn tháo vát của mình.";

      break;

    default:
      break;
  }
  switch (tongCuoi) {
    case 0:
      document.getElementById("hinhAnh1").src = "./img/ly.jpg";

      break;
    case 1:
      document.getElementById("hinhAnh1").src = "./img/kham.jpg";

      break;
    case 2:
      document.getElementById("hinhAnh").src = "./img/khon.jpg";

      break;
    case 3:
      document.getElementById("hinhAnh1").src = "./img/chan.jpg";

      break;
    case 4:
      document.getElementById("hinhAnh1").src = "./img/ton.jpg";

      break;
    case 5:
      //(nam = khôn, nữ = cấn)

      document.getElementById("hinhAnh1").src = "./img/khon.jpg";

      break;
    case 6:
      document.getElementById("hinhAnh1").src = "./img/can.jpg";

      break;
    case 7:
      document.getElementById("hinhAnh1").src = "./img/doai.jpg";

      break;
    case 8:
      document.getElementById("hinhAnh1").src = "./img/can1.jpg";

      break;
    case 9:
      document.getElementById("hinhAnh1").src = "./img/ly.jpg";
      getID("loiGiai").innerHTML =
        "Trong số 12 con giáp, chuột được chọn và con vật tiên phong, dẫn đầu, bởi vậy những người thuộc tuổi này thường có tài năng lãnh đạo, quản lí rất tốt. Hơn nữa, những người tuổi Tý còn được mọi người ngưỡng mộ bởi sự thông minh, sáng tạo, nhanh nhẹn tháo vát của mình.";

      break;

    default:
      break;
  }
  // * Số quẻ khảm 1, khôn 2, chấn 3, tốn 4, số 5
  //  *  08563 61368
  //  *  (nam = khôn, nữ = cấn), càn số 6, đoài số 7, cấn 8, ly 9
  console.log(giaiQue);

  switch (giaiQue) {
    case "76":
      getID("loiGiai").innerHTML = `
                THẠCH THIÊN QUẢI<br>
                Động hào ${tongDong}
             `;

    case "11":
      getID("loiGiai").innerHTML = `
                BÁT THUẦN KHẢM<br>
                Động hào ${tongDong}
             `;
      break;
    case "12":
      getID("loiGiai").innerHTML = `
                    THỦY ĐỊA TÝ<br>
                    Động hào ${tongDong}
                 `;
      break;
    case "13":
      getID("loiGiai").innerHTML = `
                            THỦY LÔI TRUÂN<br>
                            Động hào ${tongDong}
                         `;
      break;
    case "14":
      getID("loiGiai").innerHTML = `
            THỦY PHONG TÌNH<br>

         Động hào ${tongDong}
                                 `;
      break;
    case "15":
      getID("loiGiai").innerHTML = `
            THỦY ĐỊA TÝ<br>
        
                 Động hào ${tongDong}
                                         `;
      break;
    case "16":
      getID("loiGiai").innerHTML = `
                    THỦY THIÊN NHU<br>
                
                         Động hào ${tongDong}
                                                 `;
      break;
    case "17":
      getID("loiGiai").innerHTML = `
                            THỦY TRẠCH TIẾT<br>
                        
                                 Động hào ${tongDong}
                                                         `;
      break;
    case "18":
      getID("loiGiai").innerHTML = `
                                    THỦY SƠN KIỀN<br>
                                
                                         Động hào ${tongDong}
                                                                 `;
      break;

    default:
      break;
    case "18":
      getID("loiGiai").innerHTML = `
    Động hào ${tongDong}
                                                                         `;
      break;

    case "21":
      getID("loiGiai").innerHTML = `
  ĐỊA THỦY SƯ<br>
   Động hào ${tongDong}
                                                                         `;
      break;
    case "22":
      getID("loiGiai").innerHTML = `
 BÁT THUẦN KHÔN<br>
 Động hào ${tongDong}
                                                                                 `;
      break;
    case "23":
      getID("loiGiai").innerHTML = `
ĐỊA LÔI PHỤC<br>
                                                        
 Động hào ${tongDong}
                                                                                         `;
      break;
    case "24":
      getID("loiGiai").innerHTML = `
ĐỊA PHONG THĂNG<br>
 Động hào ${tongDong}
                                                                                                 `;
      break;
    case "25":
      getID("loiGiai").innerHTML = `
                    BÁT THUẦN KHÔN<br>
                    Động hào ${tongDong}
    `;
      break;
    case "26":
      getID("loiGiai").innerHTML = `
            ĐỊA THIÊN THÁI<br>
            Động hào ${tongDong}
            `;
      break;
    case "27":
      getID("loiGiai").innerHTML = `
                ĐỊA TRẠCH LÂM<br>
                Động hào ${tongDong}
                `;
      break;
    case "28":
      getID("loiGiai").innerHTML = `
                    ĐỊA SƠN KHIÊM<br>
                    Động hào ${tongDong}
                    `;
      break;

    case "20":
      getID("loiGiai").innerHTML = `
                                                    ĐỊA HỎA MINH DI<br>
                                                    Động hào ${tongDong}
                                                    `;
      break;
    case "30":
      getID("loiGiai").innerHTML = `
          LÔI HỎA PHONG<br>
          Động hào ${tongDong}
          `;
      break;
    case "31":
      getID("loiGiai").innerHTML = `
              LÔI THỦY GIẢI<br>
              Động hào ${tongDong}
              `;
      break;
    case "32":
      getID("loiGiai").innerHTML = `
        LÔI ĐỊA DỰ<br>
        Động hào ${tongDong}
                  `;
      break;
    case "33":
      getID("loiGiai").innerHTML = `
          BÁT THUẦN CHẤN<br>
          Động hào ${tongDong}
                    `;
      break;
    case "34":
      getID("loiGiai").innerHTML = `
              LÔI PHONG HẰNG<br>
              Động hào ${tongDong}
                        `;
      break;
    case "35":
      getID("loiGiai").innerHTML = `
                LÔI ĐỊA DỰ<br>
                Động hào ${tongDong}
                          `;
      break;
    case "36":
      getID("loiGiai").innerHTML = `
            LÔI THIÊN ĐẠI TRÁNG<br>
            Động hào ${tongDong}
      `;
      break;
    case "37":
      getID("loiGiai").innerHTML = `
              LÔI TRẠCH QUY MUỘI<br>
              Động hào ${tongDong}
        `;
      break;
    case "38":
      getID("loiGiai").innerHTML = `
            LÔI SƠN TIỂU QUẢ<br>
            Động hào ${tongDong}
          `;
      break;
    // 4
    case "40":
      getID("loiGiai").innerHTML = `
            PHONG HỎA GIA NHÂN<br>
            Động hào ${tongDong}
            `;
      break;
    case "41":
      getID("loiGiai").innerHTML = `
                PHONG THỦY HOÁN<br>
                Động hào ${tongDong}
                `;
      break;
    case "42":
      getID("loiGiai").innerHTML = `
          PHONG ĐỊA QUAN<br>
          Động hào ${tongDong}
                    `;
      break;
    case "43":
      getID("loiGiai").innerHTML = `
            PHONG SƠN TIỆM<br>
            Động hào ${tongDong}
                      `;
      break;
    case "44":
      getID("loiGiai").innerHTML = `
                BÁT THUẦN TỐN<br>
                Động hào ${tongDong}
                          `;
      break;
    case "45":
      getID("loiGiai").innerHTML = `
                  PHONG ĐỊA QUAN<br>
                  Động hào ${tongDong}
                            `;
      break;
    case "46":
      getID("loiGiai").innerHTML = `
              PHONG THIÊN TIỂU SÚC<br>
              Động hào ${tongDong}
        `;
      break;
    case "47":
      getID("loiGiai").innerHTML = `
                PHONG TRẠCH TRUNG PHU<br>
                Động hào ${tongDong}
          `;
      break;
    case "48":
      getID("loiGiai").innerHTML = `
              PHONG LÔI ÍCH<br>
              Động hào ${tongDong}
            `;
    //5
    case "51":
      getID("loiGiai").innerHTML = `
  ĐỊA THỦY SƯ<br>
   Động hào ${tongDong}
                                                                         `;
      break;
    case "52":
      getID("loiGiai").innerHTML = `
 BÁT THUẦN KHÔN<br>
 Động hào ${tongDong}
                                                                                 `;
      break;
    case "53":
      getID("loiGiai").innerHTML = `
ĐỊA LÔI PHỤC<br>
                                                        
 Động hào ${tongDong}
                                                                                         `;
      break;
    case "54":
      getID("loiGiai").innerHTML = `
ĐỊA PHONG THĂNG<br>
 Động hào ${tongDong}
                                                                                                 `;
      break;
    case "55":
      getID("loiGiai").innerHTML = `
                    BÁT THUẦN KHÔN<br>
                    Động hào ${tongDong}
    `;
      break;
    case "56":
      getID("loiGiai").innerHTML = `
            ĐỊA THIÊN THÁI<br>
            Động hào ${tongDong}
            `;
      break;
    case "57":
      getID("loiGiai").innerHTML = `
                ĐỊA TRẠCH LÂM<br>
                Động hào ${tongDong}
                `;
      break;
    case "58":
      getID("loiGiai").innerHTML = `
                    ĐỊA SƠN KHIÊM<br>
                    Động hào ${tongDong}
                    `;
      break;

    case "50":
      getID("loiGiai").innerHTML = `
 ĐỊA HỎA MINH DI<br>
 Động hào ${tongDong}
 `;
      break;

    //6
    case "60":
      getID("loiGiai").innerHTML = `
                  THIÊN ĐỒNG NHÂN<br>
                  Động hào ${tongDong}
                  `;
      break;
    case "61":
      getID("loiGiai").innerHTML = `
                      THIÊN THỦY TỤNG<br>
                      Động hào ${tongDong}
                      `;
      break;
    case "62":
      getID("loiGiai").innerHTML = `
                THIÊN ĐỊA BỈ<br>
                Động hào ${tongDong}
                          `;
      break;
    case "63":
      getID("loiGiai").innerHTML = `
                  THIÊN LÔI VÔ VỌNG<br>
                  Động hào ${tongDong}
                            `;
      break;
    case "64":
      getID("loiGiai").innerHTML = `
                      THIÊN PHONG CẤU<br>
                      Động hào ${tongDong}
                                `;
      break;
    case "65":
      getID("loiGiai").innerHTML = `
                        THIÊN ĐỊA BỈ<br>
                        Động hào ${tongDong}
                                  `;
      break;
    case "66":
      getID("loiGiai").innerHTML = `
                    BÁT THUẦN CÀN<br>
                    Động hào ${tongDong}
              `;
      break;
    case "67":
      getID("loiGiai").innerHTML = `
                      THIÊN THỦY TỤNG<br>
                      Động hào ${tongDong}
                `;
      break;
    case "68":
      getID("loiGiai").innerHTML = `
                    THIÊN SƠN ĐỘN<br>
                    Động hào ${tongDong}
                  `;
    // 7
    case "70":
      getID("loiGiai").innerHTML = `
              TRẠCH HỎA CÁCH<br>
              Động hào ${tongDong}
              `;
      break;
    case "71":
      getID("loiGiai").innerHTML = `
                  TRẠCH THỦY KHÔN<br>
                  Động hào ${tongDong}
                  `;
      break;
    case "72":
      getID("loiGiai").innerHTML = `
            TRẠCH ĐỊA TUY<br>
            Động hào ${tongDong}
                      `;
      break;
    case "73":
      getID("loiGiai").innerHTML = `
              TRẠCH LÔI TUY<br>
              Động hào ${tongDong}
                        `;
      break;
    case "74":
      getID("loiGiai").innerHTML = `
       TRẠCH PHONG ĐẠI QUẢ<br>
                  Động hào ${tongDong}
                            `;
      break;
    case "75":
      getID("loiGiai").innerHTML = `
      TRẠCH ĐỊA TUY<br>
                    Động hào ${tongDong}
                              `;
      break;
    case "76":
      getID("loiGiai").innerHTML = `
                TRẠCH THIÊN QUẢI<br>
                Động hào ${tongDong}
          `;
      break;
    case "77":
      getID("loiGiai").innerHTML = `
                  TRẠCH THỦY KHÔN<br>
                  Động hào ${tongDong}
            `;
      break;
    case "78":
      getID("loiGiai").innerHTML = `
                THẠCH SƠN HÀM<br>
                Động hào ${tongDong}
              `;
    //8
    case "80":
      getID("loiGiai").innerHTML = `
              SƠN HỎA BÍK<br>
              Động hào ${tongDong}
              `;
      break;
    case "81":
      getID("loiGiai").innerHTML = `
                  SƠN THỦY MÔNG<br>
                  Động hào ${tongDong}
                  `;
      break;
    case "82":
      getID("loiGiai").innerHTML = `
            SƠN ĐỊA BÁC<br>
            Động hào ${tongDong}
                      `;
      break;
    case "83":
      getID("loiGiai").innerHTML = `
              SƠN LÔI DI<br>
              Động hào ${tongDong}
                        `;
      break;
    case "84":
      getID("loiGiai").innerHTML = `
                  SƠN PHONG CỔ<br>
                  Động hào ${tongDong}
                            `;
      break;
    case "85":
      getID("loiGiai").innerHTML = `
                    SƠN ĐỊA BÁC<br>
                    Động hào ${tongDong}
                              `;
      break;
    case "86":
      getID("loiGiai").innerHTML = `
                SƠN THIÊN ĐẠI SÚC<br>
                Động hào ${tongDong}
          `;
      break;
    case "87":
      getID("loiGiai").innerHTML = `
                  SƠN THỦY MÔNG<br>
                  Động hào ${tongDong}
            `;
      break;
    case "88":
      getID("loiGiai").innerHTML = `
                BÁT THUẦN CẤN<br>
                Động hào ${tongDong}
              `;
              break;
    // 9
    case "90":
      getID("loiGiai").innerHTML = `
             BÁT THUẦN LY<br>
              Động hào ${tongDong}
              `;
      break;
    case "91":
      getID("loiGiai").innerHTML = `
                  HỎA THỦY VỊ TẾ<br>
                  Động hào ${tongDong}
                  `;
      break;
    case "92":
      getID("loiGiai").innerHTML = `
            HỎA ĐỊA TẤN<br>
            Động hào ${tongDong}
                      `;
      break;
    case "93":
      getID("loiGiai").innerHTML = `
              HỎA LÔI PHỆ HẠP<br>
              Động hào ${tongDong}
                        `;
      break;
    case "94":
      getID("loiGiai").innerHTML = `
                  HỎA PHONG ĐINH<br>
                  Động hào ${tongDong}
                            `;
      break;
    case "95":
      getID("loiGiai").innerHTML = `
                    HỎA ĐỊA TẤN<br>
                    Động hào ${tongDong}
                              `;
      break;
    case "96":
      getID("loiGiai").innerHTML = `
                HỎA THIÊN ĐẠI HỮU<br>
                Động hào ${tongDong}
          `;
      break;
    case "97":
      getID("loiGiai").innerHTML = `
                  HỎA TRẠCH KÊ<br>
                  Động hào ${tongDong}
            `;
      break;
    case "98":
      getID("loiGiai").innerHTML = `
                PHONG SƠN LỮ<br>
                Động hào ${tongDong}
              `;
      break;

  }
  getID("ketQuaNamSinh").style.display = "block";
  getID("ketQuaNamSinh").innerHTML = "Quẻ số điện thoại này là  ";
});
