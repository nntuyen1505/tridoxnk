
import { Step } from './types';

export const IMPORT_EXPORT_STEPS: Step[] = [
  {
    id: 0,
    title: "Tổng quan quy trình",
    subtitle: "Global Logistics Overview",
    iconName: "Globe",
    color: "bg-slate-700",
    isOverview: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    details: "Cái nhìn toàn cảnh về hệ thống vận hành xuất nhập khẩu quốc tế, từ khâu sản xuất tại kho đến khi giao hàng qua các phương thức vận tải biển và hàng không.",
    tips: [
      {
        title: "Hiểu rõ chuỗi cung ứng toàn cầu",
        detail: "Sales cần nắm bắt từ khâu nguyên liệu đầu vào, sản xuất, vận tải nội địa đến vận tải quốc tế. Việc hiểu rõ giúp bạn dự báo được các điểm nghẽn có thể xảy ra (ví dụ: thiếu container tại cảng đi) để chủ động báo cho khách hàng, tránh gây thất vọng khi hàng chậm trễ."
      },
      {
        title: "Phân tích mối quan hệ giữa chi phí và rủi ro",
        detail: "Trong Logistics, giá rẻ thường đi kèm rủi ro cao hoặc thời gian vận chuyển dài. Bạn phải giải thích cho khách hiểu tại sao phí vận chuyển đường hàng không đắt hơn nhưng an toàn cho hàng linh kiện điện tử, trong khi đường biển phù hợp cho hàng nông sản số lượng lớn."
      },
      {
        title: "Kỹ năng phối hợp đa bên",
        detail: "Một đơn hàng thành công cần sự phối hợp giữa: Sales - Chứng từ - Kho - Forwarder - Hãng tàu - Hải quan. Sales là người đứng giữa điều phối thông tin, đảm bảo mọi bên đều hiểu đúng yêu cầu của khách hàng về thời gian và quy cách hàng hóa."
      }
    ],
    docs: [
      { name: "Sơ đồ tổng thể", imageUrl: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1000" },
      { name: "Lộ trình vận chuyển", imageUrl: "https://images.unsplash.com/photo-1494412574735-a119c601503f?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "Chủ thể nào đóng vai trò điều phối thông tin chính trong chuỗi cung ứng XNK?",
        options: ["Hãng tàu", "Nhân viên Sales", "Hải quan", "Kho bãi"],
        correctAnswer: 1,
        explanation: "Sales là người đứng giữa điều phối thông tin giữa khách hàng và các bộ phận vận hành."
      },
      {
        question: "Đâu là ưu điểm lớn nhất của vận tải đường hàng không so với đường biển?",
        options: ["Chi phí rẻ", "Chở được hàng siêu trường siêu trọng", "Tốc độ nhanh và an toàn cao", "Thủ tục đơn giản hơn"],
        correctAnswer: 2,
        explanation: "Đường hàng không có ưu thế tuyệt đối về tốc độ và an toàn cho hàng giá trị cao."
      },
      {
        question: "Tại sao Sales cần hiểu rõ chuỗi cung ứng?",
        options: ["Để làm thay việc của kho", "Để dự báo rủi ro và tư vấn lộ trình tối ưu", "Để tự lái xe container", "Để không cần thuê Forwarder"],
        correctAnswer: 1,
        explanation: "Hiểu chuỗi cung ứng giúp Sales tư vấn giải pháp tốt nhất và quản lý kỳ vọng khách hàng."
      },
      {
        question: "Mắt xích nào trong quy trình liên quan đến rủi ro pháp lý cao nhất?",
        options: ["Đóng gói hàng", "Tìm kiếm khách hàng", "Thủ tục Hải quan", "Chăm sóc sau bán hàng"],
        correctAnswer: 2,
        explanation: "Hải quan là khâu kiểm soát pháp lý, nếu sai sót có thể bị phạt hành chính hoặc hình sự."
      },
      {
        question: "Yếu tố nào thường đi kèm với chi phí Logistics rẻ?",
        options: ["Dịch vụ cao cấp", "Thời gian vận chuyển dài hoặc rủi ro cao", "Tốc độ cực nhanh", "Miễn thuế hải quan"],
        correctAnswer: 1,
        explanation: "Trong logistics, thường có sự đánh đổi giữa chi phí, thời gian và an toàn."
      }
    ]
  },
  {
    id: 1,
    title: "Tìm kiếm & Báo giá",
    subtitle: "Inquiry & Quotation",
    iconName: "Users",
    color: "bg-blue-500",
    details: "Đây là giai đoạn Sales tiếp cận khách hàng. Cần nắm rõ nhu cầu để đưa ra báo giá phù hợp.",
    tips: [
      {
        title: "Lựa chọn Incoterms thông minh",
        detail: "Đừng chỉ báo giá theo thói quen. Nếu công ty bạn có thế mạnh về logistics nội địa, hãy đề xuất bán giá CIF hoặc DDP để gia tăng lợi nhuận từ phần vận tải. Ngược lại, nếu khách có hãng tàu riêng, hãy báo giá FOB để tối giản trách nhiệm và rủi ro."
      },
      {
        title: "Cách kiểm tra giá cước (Freight) hiệu quả",
        detail: "Giá cước vận tải biển biến động theo tuần. Hãy duy trì mối quan hệ tốt với ít nhất 3-5 Forwarder khác nhau để so sánh giá nhanh nhất. Luôn hỏi về các phụ phí (Local charges) tại cảng đích để báo đầy đủ cho khách, tránh phát sinh chi phí ẩn gây mất uy tín."
      },
      {
        title: "Quy tắc thiết lập thời hạn hiệu lực báo giá",
        detail: "Báo giá XNK không bao giờ là vĩnh viễn. Luôn ghi rõ: 'Giá này có hiệu lực đến ngày...' (thường là cuối tháng hoặc trong 15 ngày). Điều này bảo vệ bạn khỏi việc lỗ vốn khi tỷ giá hoặc giá xăng dầu tăng đột ngột."
      }
    ],
    docs: [
      { name: "Bảng báo giá (Quotation)", imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1000" },
      { name: "Catalog sản phẩm", imageUrl: "https://inoffsethcm.com/wp-content/uploads/2025/09/in-catalogue-xuat-khau.jpg" }
    ],
    quiz: [
      {
        question: "Incoterms nào người bán chịu trách nhiệm cao nhất, bao gồm cả đóng thuế nhập khẩu?",
        options: ["FOB", "CIF", "DDP", "EXW"],
        correctAnswer: 2,
        explanation: "DDP (Delivered Duty Paid) yêu cầu người bán giao hàng đến kho người mua và đóng mọi loại thuế."
      },
      {
        question: "Tại sao báo giá XNK cần có thời hạn hiệu lực?",
        options: ["Để ép khách chốt sớm", "Do biến động giá cước và tỷ giá", "Do quy định của Nhà nước", "Để tiết kiệm giấy in"],
        correctAnswer: 1,
        explanation: "Giá cước vận chuyển và tỷ giá ngoại tệ biến động liên tục nên báo giá phải có hạn định."
      },
      {
        question: "Trong giá CIF, chữ 'I' viết tắt của từ gì?",
        options: ["International", "Invoice", "Insurance", "Incoterms"],
        correctAnswer: 2,
        explanation: "CIF là Cost, Insurance and Freight (Giá hàng, bảo hiểm và cước phí)."
      },
      {
        question: "Khi báo giá FOB, người bán giao hàng tại đâu?",
        options: ["Tại kho người bán", "Tại kho người mua", "Lên tàu tại cảng đi", "Tại cảng đến"],
        correctAnswer: 2,
        explanation: "FOB (Free On Board) là giao hàng lên tàu tại cảng bốc hàng chỉ định."
      },
      {
        question: "Local charges là gì?",
        options: ["Phí ăn uống tại cảng", "Phí địa phương tại cảng biển/sân bay", "Thuế thu nhập cá nhân", "Phí môi giới"],
        correctAnswer: 1,
        explanation: "Local charges là các loại phí tại cảng như THC, Seal, THC, Document fee... phải trả cho hãng tàu/cảng."
      }
    ]
  },
  {
    id: 2,
    title: "Đàm phán & Hợp đồng",
    subtitle: "Sales Contract",
    iconName: "FileText",
    color: "bg-indigo-500",
    details: "Chốt các điều khoản quan trọng để bảo vệ quyền lợi công ty và tránh tranh chấp sau này.",
    tips: [
      {
        title: "Điều khoản Sai số (Tolerance Clause)",
        detail: "Với các mặt hàng nông sản, khoáng sản, trọng lượng thực tế thường lệch so với hợp đồng do độ ẩm hoặc rơi vãi. Hãy cài đặt điều khoản 'Tolerance +/- 5%' để tránh việc khách hàng từ chối thanh toán hoặc khiếu nại khi hàng thiếu hụt một chút so với hóa đơn."
      },
      {
        title: "Lựa chọn Luật áp dụng và Trọng tài",
        detail: "Khi xảy ra tranh chấp quốc tế, việc đi kiện rất tốn kém. Hãy ưu tiên chọn cơ quan trọng tài tại Việt Nam (như VIAC) hoặc một nước trung gian có hệ thống luật thương mại minh bạch (như Singapore) để bảo vệ quyền lợi nếu khách hàng vi phạm hợp đồng."
      },
      {
        title: "Xác minh thông tin Ngân hàng",
        detail: "Đây là điểm yếu mà tin tặc thường khai thác. Hãy yêu cầu khách xác nhận số tài khoản ngân hàng qua ít nhất 2 kênh (Email + Điện thoại/Fax). Tuyệt đối không chuyển tiền nếu khách báo thay đổi số tài khoản qua một email lạ mà không có công văn đóng dấu."
      }
    ],
    docs: [
      { name: "Hợp đồng ngoại thương (S/C)", imageUrl: "https://tsl.com.vn/wp-content/uploads/2023/10/hop-dong-ngoai-thuong-2.jpg" },
      { name: "Proforma Invoice (P/I)", imageUrl: "https://www.container-transportation.com/images/proforma-invoice-la-gi.jpg" }
    ],
    quiz: [
      {
        question: "Điều khoản Tolerance (Sai số) thường áp dụng cho loại hàng nào?",
        options: ["Hàng đóng thùng carton", "Hàng linh kiện điện tử", "Hàng rời như nông sản, khoáng sản", "Hàng thời trang"],
        correctAnswer: 2,
        explanation: "Hàng rời dễ biến động trọng lượng do độ ẩm/rơi vãi nên cần điều khoản sai số."
      },
      {
        question: "Proforma Invoice (P/I) khác Sales Contract (S/C) ở điểm nào?",
        options: ["P/I có giá trị pháp lý cao hơn", "P/I là hóa đơn tạm thời, S/C là văn bản thỏa thuận chính thức", "P/I dùng để đi tàu, S/C dùng để trả tiền", "Hai loại là một"],
        correctAnswer: 1,
        explanation: "P/I thường là bản nháp để khách mở L/C hoặc đặt cọc, S/C là hợp đồng ký kết chính thức."
      },
      {
        question: "Tại sao nên chọn Trọng tài (Arbitration) thay vì Tòa án khi tranh chấp quốc tế?",
        options: ["Chi phí rẻ hơn", "Thời gian xử lý nhanh và tính bảo mật cao hơn", "Trọng tài luôn đứng về người bán", "Trọng tài không có quyền phán quyết"],
        correctAnswer: 1,
        explanation: "Trọng tài thương mại quốc tế giúp xử lý tranh chấp nhanh gọn, chuyên nghiệp và kín đáo hơn tòa án."
      },
      {
        question: "Sales cần làm gì khi khách báo thay đổi số tài khoản qua Email?",
        options: ["Chuyển tiền ngay", "Báo cáo sếp rồi chuyển", "Gọi điện xác nhận trực tiếp với người có thẩm quyền", "Phớt lờ email"],
        correctAnswer: 2,
        explanation: "Để tránh lừa đảo, mọi thay đổi thông tin ngân hàng phải được xác nhận qua kênh thoại hoặc văn bản đóng dấu."
      },
      {
        question: "Hợp đồng ngoại thương cần quy định 'Luật áp dụng' để làm gì?",
        options: ["Để cho đẹp", "Để làm cơ sở giải quyết nếu hai bên có tranh chấp", "Để đóng thuế", "Theo yêu cầu của hãng tàu"],
        correctAnswer: 1,
        explanation: "Luật áp dụng giúp xác định khung pháp lý để phân xử khi các bên không tự thỏa thuận được."
      }
    ]
  },
  {
    id: 3,
    title: "Thanh toán (L/C, T/T)",
    subtitle: "Payment Terms",
    iconName: "CreditCard",
    color: "bg-purple-500",
    details: "Sales cần đôn đốc khách hàng thanh toán đặt cọc hoặc mở L/C để tiến hành sản xuất.",
    tips: [
      {
        title: "Kỹ năng kiểm tra Draft L/C",
        detail: "Khi khách gửi bản nháp L/C, hãy đối chiếu kỹ với Hợp đồng. Đặc biệt lưu ý các 'điều khoản gài bẫy' (soft clauses) như yêu cầu chứng từ mà bạn không thể có được. Phải yêu cầu khách sửa L/C trước khi họ phát hành chính thức để tránh phí tu chỉnh (Amendment fee)."
      },
      {
        title: "An toàn trong thanh toán T/T",
        detail: "Quy tắc vàng cho Sales: 30% Deposit - 70% sau khi gửi bản scan Vận đơn (Bill of Lading). Tuyệt đối không giải phóng hàng (Release cargo) nếu chưa nhận được tiền hoặc Swift Advice xác nhận từ ngân hàng phía mình."
      },
      {
        title: "Cảnh giác với giả mạo Email",
        detail: "Tin tặc thường giả danh đối tác báo 'Tài khoản ngân hàng đang bị kiểm toán, hãy chuyển tiền vào tài khoản cá nhân của giám đốc'. Hãy đào tạo khách hàng luôn gọi điện xác nhận trước khi thực hiện bất kỳ thay đổi nào trong lộ trình thanh toán."
      }
    ],
    docs: [
      { name: "Bản sao L/C", imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000" },
      { name: "Điện chuyển tiền (Swift Advice)", imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "L/C (Letter of Credit) là cam kết thanh toán của ai?",
        options: ["Người mua", "Người bán", "Ngân hàng mở L/C", "Công ty bảo hiểm"],
        correctAnswer: 2,
        explanation: "L/C là phương thức thanh toán mà Ngân hàng cam kết trả tiền for người bán nếu bộ chứng từ hợp lệ."
      },
      {
        question: "Trong thanh toán T/T, thời điểm nào là an toàn nhất để người bán thả hàng?",
        options: ["Khi khách hứa sẽ trả", "Khi khách gửi ảnh chụp lệnh chuyển tiền", "Khi tiền đã thực nổi trong tài khoản ngân hàng của người bán", "Khi hàng đã cập cảng đích"],
        correctAnswer: 2,
        explanation: "Chỉ khi tiền đã vào tài khoản thì mới đảm bảo chắc chắn khách đã thanh toán."
      },
      {
        question: "Amendment fee trong L/C là phí gì?",
        options: ["Phí mở L/C", "Phí tu chỉnh (sửa đổi) L/C", "Phí vận chuyển", "Phí kiểm định"],
        correctAnswer: 1,
        explanation: "Nếu L/C phát hành sai so với thỏa thuận, việc sửa đổi sẽ phát sinh phí tu chỉnh."
      },
      {
        question: "L/C giáp lưng (Back-to-Back L/C) thường dùng trong trường hợp nào?",
        options: ["Mua bán trực tiếp", "Mua bán qua trung gian", "Thanh toán nội địa", "Thanh toán tiền mặt"],
        correctAnswer: 1,
        explanation: "L/C giáp lưng dùng khi người trung gian dùng L/C của người mua để mở một L/C khác cho nhà sản xuất."
      },
      {
        question: "Swift Advice là gì?",
        options: ["Hóa đơn điện tiền", "Điện xác nhận chuyển tiền qua hệ thống SWIFT", "Hợp đồng vận chuyển", "Giấy phép nhập khẩu"],
        correctAnswer: 1,
        explanation: "Swift Advice là điện báo xác nhận ngân hàng đã thực hiện lệnh chuyển tiền quốc tế."
      }
    ]
  },
  {
    id: 4,
    title: "Chuẩn bị hàng hóa",
    subtitle: "Production & Packing",
    iconName: "Package",
    color: "bg-cyan-500",
    details: "Theo dõi tiến độ sản xuất để kịp lịch tàu đã hứa với khách hàng.",
    tips: [
      {
        title: "Kiểm soát Packing List chi tiết",
        detail: "Packing List không chỉ là số lượng thùng. Nó phải thể hiện chính xác số đo (Dimension) và trọng lượng (G.W/N.W) từng kiện. Thông tin sai lệch trên P/L sẽ dẫn đến sai lệch trên Bill of Lading và Tờ khai hải quan, gây rắc rối lớn khi thông quan."
      },
      {
        title: "Quy chuẩn Shipping Marks",
        detail: "Mác ký hiệu trên kiện hàng giúp công nhân cảng nhận diện đúng lô hàng của khách. Sales cần gửi mẫu Shipping Marks cho xưởng in đúng kích thước, rõ ràng, gồm: Tên khách, Số hợp đồng, Cảng đích, Số thứ tự kiện hàng (ví dụ: 1/100)."
      },
      {
        title: "Gia tăng niềm tin bằng hình ảnh thực tế",
        detail: "Trong khi chờ đợi, hãy chủ động gửi ảnh quá trình đóng gói, ảnh hàng đã chất lên container cho khách. Điều này chứng minh sự minh bạch và chuyên nghiệp, giúp khách hàng yên tâm hơn về chất lượng hàng hóa họ đã đặt mua."
      }
    ],
    docs: [
      { name: "Phiếu đóng gói (P/L)", imageUrl: "https://vinatrain.edu.vn/wp-content/uploads/2023/12/z4934087405437_468a37109e249283961f76b3e870bc73.jpg" },
      { name: "Chứng nhận chất lượng (C/Q)", imageUrl: "src/assets/images/gkdtv.png?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "Gross Weight (G.W) bao gồm những gì?",
        options: ["Trọng lượng tịnh của hàng", "Trọng lượng hàng + bao bì", "Trọng lượng vỏ container", "Trọng lượng xe tải"],
        correctAnswer: 1,
        explanation: "Gross Weight là tổng trọng lượng bao gồm cả hàng hóa và bao bì đóng gói."
      },
      {
        question: "Shipping Marks là gì?",
        options: ["Dấu vân tay người đóng gói", "Nhãn hiệu vận chuyển dán/in trên kiện hàng", "Giá tiền sản phẩm", "Tên con tàu chở hàng"],
        correctAnswer: 1,
        explanation: "Shipping marks giúp nhận diện kiện hàng trong quá trình vận chuyển và bốc xếp."
      },
      {
        question: "Tại sao Sales cần ảnh chụp hàng hóa trước khi xuất?",
        options: ["Để đăng lên Facebook", "Để làm bằng chứng và tạo lòng tin cho khách", "Để khoe với sếp", "Theo quy định bắt buộc của hải quan"],
        correctAnswer: 1,
        explanation: "Ảnh thực tế giúp khách yên tâm và là bằng chứng đối chiếu nếu hàng bị hư hỏng sau này."
      },
      {
        question: "Chứng nhận chất lượng (C/Q) do ai cấp?",
        options: ["Hãng tàu", "Ngân hàng", "Nhà sản xuất hoặc cơ quan giám định", "Forwarder"],
        correctAnswer: 2,
        explanation: "C/Q (Certificate of Quality) xác nhận hàng hóa đạt tiêu chuẩn chất lượng cam kết."
      },
      {
        question: "Sai lệch thông tin trên Packing List dẫn đến hệ lụy gì?",
        options: ["Hàng bay nhanh hơn", "Sai lệch trên Bill of Lading và Tờ khai hải quan", "Được miễn thuế", "Không ảnh hưởng gì"],
        correctAnswer: 1,
        explanation: "P/L là gốc của các chứng từ khác, sai P/L sẽ kéo theo sai cả hệ thống chứng từ."
      }
    ]
  },
  {
    id: 5,
    title: "Booking & Vận chuyển",
    subtitle: "Logistics & Booking",
    iconName: "Truck",
    color: "bg-amber-500",
    details: "Phối hợp với bộ phận Forwarder để lấy Booking Note và sắp xếp container.",
    tips: [
      {
        title: "Chiến lược đặt chỗ (Booking) mùa cao điểm",
        detail: "Vào các tháng cuối năm (Peak season), chỗ trên tàu rất khan hiếm. Sales nên lấy booking trước ít nhất 2-3 tuần so với ngày dự định tàu chạy (ETD). Luôn có phương án dự phòng (Back-up) với các hãng tàu khác nếu bị rớt container (Rolled over)."
      },
      {
        title: "Quản lý thời gian Closing Time",
        detail: "Closing time là 'hạn chót' để hạ container tại bãi cảng. Nếu lỡ thời gian này, hàng của bạn sẽ phải nằm lại chờ chuyến tàu tuần sau, phát sinh phí lưu kho bãi (Storage) và làm chậm tiến độ giao hàng cho khách. Hãy đốc thúc xe kéo container đi sớm để trừ hao kẹt xe."
      },
      {
        title: "Lựa chọn loại Container phù hợp",
        detail: "Sales phải biết hàng mình cần loại cont nào: Cont 20' (hàng nặng, ít thể tích), Cont 40' High Cube (hàng nhẹ, cồng kềnh), hay Cont lạnh (RF) cho thực phẩm. Việc chọn sai loại cont sẽ gây lãng phí chi phí vận chuyển cực lớn."
      }
    ],
    docs: [
      { name: "Lệnh cấp container (Booking Note)", imageUrl: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000" },
      { name: "Vận đơn nháp (Draft B/L)", imageUrl: "https://images.unsplash.com/photo-1565891741441-6ad9653bb7b7?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "ETD là viết tắt của từ gì?",
        options: ["Estimated Time of Delivery", "Estimated Time of Departure", "End Time of Day", "Effective Time Date"],
        correctAnswer: 1,
        explanation: "ETD (Estimated Time of Departure) là thời gian dự kiến tàu khởi hành."
      },
      {
        question: "Closing Time là gì?",
        options: ["Giờ đóng cửa văn phòng", "Hạn cuối hạ container/giao hàng tại cảng", "Giờ tàu cập cảng", "Thời điểm hết hạn hợp đồng"],
        correctAnswer: 1,
        explanation: "Sau Closing Time, cảng sẽ ngừng nhận hàng cho chuyến tàu đó."
      },
      {
        question: "Container 40' HC khác 40' DC ở điểm nào?",
        options: ["HC dài hơn", "HC cao hơn", "HC chở được nặng hơn", "HC rẻ hơn"],
        correctAnswer: 1,
        explanation: "HC (High Cube) có chiều cao lớn hơn cont thường (DC/GP) khoảng 30cm."
      },
      {
        question: "Booking Note là chứng từ do ai cấp?",
        options: ["Hải quan", "Người bán", "Hãng tàu hoặc Forwarder", "Ngân hàng"],
        correctAnswer: 2,
        explanation: "Booking Note xác nhận việc giữ chỗ trên tàu cho lô hàng."
      },
      {
        question: "Lô hàng bị 'Rolled over' nghĩa là gì?",
        options: ["Hàng bị mất", "Hàng bị rớt lại chờ chuyến sau", "Hàng được giao sớm", "Hàng bị cháy"],
        correctAnswer: 1,
        explanation: "Rolled over là tình trạng tàu quá tải nên container phải đợi chuyến tiếp theo."
      }
    ]
  },
  {
    id: 6,
    title: "Thủ tục Hải quan",
    subtitle: "Customs Clearance (VNACCS)",
    iconName: "ShieldCheck",
    color: "bg-emerald-500",
    details: "Khai báo thông tin hàng hóa lên hệ thống VNACCS/VCIS. Sau khi truyền tờ khai, hệ thống sẽ tự động phân luồng dựa trên mức độ rủi ro.",
    isCustomsStep: true,
    channels: [
      {
        name: "Luồng Xanh",
        code: "🟢 Green Lane",
        desc: "Miễn kiểm tra chi tiết hồ sơ và miễn kiểm tra thực tế hàng hóa. Thông quan ngay.",
        color: "border-green-500 bg-green-50 text-green-700"
      },
      {
        name: "Luồng Vàng",
        code: "🟡 Yellow Lane",
        desc: "Hải quan kiểm tra chi tiết hồ sơ (giấy tờ). Nếu khớp đúng mới được thông quan.",
        color: "border-yellow-500 bg-yellow-50 text-yellow-700"
      },
      {
        name: "Luồng Đỏ",
        code: "🔴 Red Lane",
        desc: "Hải quan kiểm tra chi tiết hồ sơ VÀ kiểm tra thực tế hàng hóa (khui cont/kiện).",
        color: "border-red-500 bg-red-50 text-red-700"
      }
    ],
    tips: [
      {
        title: "Tầm quan trọng của mã HS Code",
        detail: "HS Code quyết định thuế suất. Áp sai mã HS Code không chỉ bị truy thu thuế mà còn bị phạt hành chính nặng. Sales nên tham khảo ý kiến bộ phận hiện trường hoặc chuyên gia hải quan để chọn mã HS phù hợp nhất với mô tả hàng hóa."
      },
      {
        title: "Dự phòng chi phí cho Luồng Vàng/Đỏ",
        detail: "Khi rơi vào luồng Đỏ, bạn phải trả phí nâng hạ container để hải quan kiểm hóa, phí bồi dưỡng công nhân bốc xếp. Hãy chuẩn bị sẵn một khoản ngân sách dự phòng cho những phát sinh này để quy trình thông quan không bị gián đoạn."
      },
      {
        title: "Hoàn thiện bộ hồ sơ giấy chuẩn chỉnh",
        detail: "Hồ sơ giấy cần: Invoice, Packing List, Hợp đồng, Bill, C/O (bản gốc). Mọi thông tin (Số container, số seal, tên hàng) phải khớp 100% với tờ khai điện tử. Một sai sót nhỏ về chính tả cũng có thể khiến tờ khai bị bác bỏ."
      }
    ],
    docs: [
      { name: "Tờ khai hải quan", imageUrl: "src/assets/images/tkhh.png?q=80&w=1000" },
      { name: "Kết quả phân luồng", imageUrl: "https://vinatrain.edu.vn/wp-content/uploads/2024/05/ma-phan-loai-luong-vang.png?q=80&w=1000" },
      { name: "Chứng nhận xuất xứ (C/O)", imageUrl: "src/assets/images/co.png?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "Luồng Vàng trong hải quan nghĩa là gì?",
        options: ["Thông quan ngay", "Kiểm tra hồ sơ giấy", "Kiểm tra thực tế hàng hóa", "Hàng bị tịch thu"],
        correctAnswer: 1,
        explanation: "Luồng Vàng yêu cầu hải quan xem xét chi tiết bộ hồ sơ chứng từ giấy."
      },
      {
        question: "HS Code có bao nhiêu chữ số phổ biến tại Việt Nam?",
        options: ["4 số", "6 số", "8 số", "12 số"],
        correctAnswer: 2,
        explanation: "Biểu thuế XNK Việt Nam hiện nay chủ yếu sử dụng mã HS 8 số."
      },
      {
        question: "Cơ quan nào quản lý hệ thống VNACCS/VCIS?",
        options: ["Bộ Công Thương", "Tổng cục Hải quan", "Bộ Giao thông vận tải", "Ngân hàng Nhà nước"],
        correctAnswer: 1,
        explanation: "Đây là hệ thống thông quan tự động do ngành Hải quan quản lý."
      },
      {
        question: "Chi phí phát sinh lớn nhất khi rơi vào Luồng Đỏ là gì?",
        options: ["Phí in ấn", "Phí nâng hạ kiểm hóa và lưu kho bãi", "Phí môi giới", "Tiền thuế tăng lên"],
        correctAnswer: 1,
        explanation: "Hàng luồng Đỏ phải khui cont kiểm tra nên tốn phí nâng hạ và thời gian lưu bãi."
      },
      {
        question: "Chứng nhận xuất xứ (C/O) có tác dụng chính là gì?",
        options: ["Chứng minh hàng đẹp", "Để được hưởng ưu đãi thuế quan", "Để làm bảo hiểm", "Để thay thế hóa đơn"],
        correctAnswer: 1,
        explanation: "C/O xác nhận nguồn gốc hàng hóa để áp dụng các mức thuế ưu đãi theo các hiệp định thương mại."
      }
    ]
  },
  {
    id: 7,
    title: "Giao hàng & Chứng từ",
    subtitle: "Shipment & Documents",
    iconName: "Ship",
    color: "bg-orange-500",
    details: "Sau khi tàu chạy, tập hợp bộ chứng từ để gửi khách hàng đi nhận hàng.",
    tips: [
      {
        title: "Tối ưu hóa Giấy chứng nhận xuất xứ (C/O)",
        detail: "Mỗi thị trường có mẫu C/O riêng (Form E cho Trung Quốc, Form D cho ASEAN, Form AK cho Hàn Quốc...). Sales phải biết mẫu nào giúp khách hàng được hưởng ưu đãi thuế quan tốt nhất để gia tăng lợi thế cạnh tranh cho sản phẩm của mình."
      },
      {
        title: "Quy trình kiểm tra chứng từ (Checking process)",
        detail: "Luôn gửi bản Scan/Draft chứng từ cho khách hàng kiểm tra và xác nhận 'OK' qua email trước khi in bản chính hoặc chuyển phát nhanh. Việc sửa chứng từ khi đã gửi đi quốc tế cực kỳ tốn kém và mất thời gian."
      },
      {
        title: "Hệ thống theo dõi lịch trình (Tracking)",
        detail: "Đừng đợi khách hỏi. Hãy chủ động cập nhật vị trí tàu hàng tuần. Nếu tàu bị trễ do thời tiết hoặc tắc nghẽn cảng, hãy báo ngay cho khách kèm theo giải thích hợp lý. Sự chủ động này phân biệt một Sales giỏi với một Sales trung bình."
      }
    ],
    docs: [
      { name: "Vận đơn (B/L)", imageUrl: "src/assets/images/FINALBL.png?q=80&w=1000" },
      { name: "Hóa đơn (Invoice)", imageUrl: "src/assets/images/invoice.png" },
      { name: "Bảo hiểm hàng hóa", imageUrl: "https://thegioibaohiem.net/upload/news/28897610.jpg" }
    ],
    quiz: [
      {
        question: "Vận đơn đường biển (Bill of Lading) có chức năng nào sau đây?",
        options: ["Biên nhận hàng hóa", "Chứng từ sở hữu hàng hóa", "Hợp đồng vận chuyển", "Tất cả các ý trên"],
        correctAnswer: 3,
        explanation: "Bill of Lading là chứng từ quan trọng nhất, hội đủ cả 3 chức năng trên."
      },
      {
        question: "C/O Form E dùng cho hàng xuất/nhập từ thị trường nào?",
        options: ["Châu Âu", "Hàn Quốc", "Trung Quốc", "Nhật Bản"],
        correctAnswer: 2,
        explanation: "Form E áp dụng cho khu vực ASEAN - Trung Quốc."
      },
      {
        question: "Tại sao nên gửi bản Draft chứng từ cho khách xác nhận trước?",
        options: ["Để khách làm hộ", "Để tránh sai sót và chi phí sửa chứng từ sau này", "Do luật quy định", "Để khách tự in"],
        correctAnswer: 1,
        explanation: "Sửa chứng từ gốc khi đã phát hành/gửi đi rất tốn kém và gây chậm trễ nhận hàng."
      },
      {
        question: "Surrendered B/L (Vận đơn điện giao hàng) dùng để làm gì?",
        options: ["Để hàng đi nhanh hơn", "Để khách nhận hàng mà không cần B/L gốc", "Để miễn thuế", "Để bán lại hàng trên đường đi"],
        correctAnswer: 1,
        explanation: "Surrendered Bill giúp giải phóng hàng nhanh, khách chỉ cần bản fax/email để nhận hàng."
      },
      {
        question: "Thông tin nào trên Invoice là quan trọng nhất đối với Hải quan?",
        options: ["Màu sắc hóa đơn", "Tên con tàu", "Đơn giá, thành tiền và điều kiện Incoterms", "Số điện thoại tài xế"],
        correctAnswer: 2,
        explanation: "Giá trị hàng hóa và Incoterms quyết định số thuế phải đóng."
      }
    ]
  },
  {
    id: 8,
    title: "Quyết toán & Chăm sóc",
    subtitle: "Closing & After-sales",
    iconName: "CheckCircle",
    color: "bg-rose-500",
    details: "Xác nhận khách đã nhận hàng, thanh toán đủ và duy trì mối quan hệ.",
    tips: [
      {
        title: "Kỹ năng thu thập phản hồi khách hàng",
        detail: "Sau khi hàng cập kho khách 3-5 ngày, hãy gọi điện hoặc email hỏi thăm: 'Chất lượng hàng thế nào?', 'Đóng gói có bị hư hại không?'. Những phản hồi này là nguồn tư liệu quý giá để cải thiện quy trình sản xuất và phục vụ tốt hơn ở đơn sau."
      },
      {
        title: "Giải quyết khiếu nại chuyên nghiệp",
        detail: "Khi có sự cố, tuyệt đối không trốn tránh. Hãy yêu cầu khách gửi ảnh/video bằng chứng, sau đó phối hợp với bảo hiểm hoặc xưởng sản xuất để đưa ra phương án đền bù thỏa đáng. Cách bạn xử lý khủng hoảng sẽ quyết định khách hàng có ở lại với bạn hay không."
      },
      {
        title: "Khai thác cơ hội bán hàng tiếp theo (Upselling)",
        detail: "Dựa trên chu kỳ tiêu thụ của khách, hãy gợi ý đơn hàng mới trước khi họ hết hàng dự trữ. Cung cấp thông tin về xu hướng thị trường hoặc các sản phẩm mới của công ty để giữ cho dòng chảy kinh doanh luôn liên tục."
      }
    ],
    docs: [
      { name: "Biên bản thanh lý", imageUrl: "https://cabinlaw.vn/wp-content/uploads/2020/11/5ab94cf1f9de04bb94c0cc5a332460e3-0.jpg" },
      { name: "Báo cáo doanh thu", imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" }
    ],
    quiz: [
      {
        question: "Mục đích quan trọng nhất của việc chăm sóc sau bán hàng là gì?",
        options: ["Để đòi nốt tiền", "Để khách hàng quay lại mua tiếp (Retention)", "Để khoe với đồng nghiệp", "Để kết thúc công việc"],
        correctAnswer: 1,
        explanation: "Giữ chân khách hàng cũ luôn rẻ hơn và hiệu quả hơn tìm khách hàng mới."
      },
      {
        question: "Khi khách khiếu nại về chất lượng hàng, Sales nên làm gì đầu tiên?",
        options: ["Từ chối trách nhiệm", "Lắng nghe, xin lỗi và yêu cầu bằng chứng (ảnh/video)", "Cãi nhau với khách", "Nghỉ việc"],
        correctAnswer: 1,
        explanation: "Thái độ cầu thị và thu thập bằng chứng là bước đầu tiên để giải quyết khiếu nại."
      },
      {
        question: "Thời điểm nào thích hợp nhất để gợi ý đơn hàng mới?",
        options: ["Ngay khi vừa ký hợp đồng cũ", "Khi khách vừa nhận hàng và hài lòng", "Khi khách đang tức giận", "Sau 1 năm"],
        correctAnswer: 1,
        explanation: "Khi khách vừa trải nghiệm dịch vụ tốt là lúc tâm lý họ cởi mở nhất để bàn về đơn hàng tiếp theo."
      },
      {
        question: "Biên bản thanh lý hợp đồng dùng để làm gì?",
        options: ["Để vứt hồ sơ đi", "Xác nhận hai bên đã hoàn thành nghĩa vụ và không còn khiếu nại", "Để đi nộp thuế", "Để tặng quà khách"],
        correctAnswer: 1,
        explanation: "Thanh lý hợp đồng giúp chốt lại mọi nghĩa vụ pháp lý giữa hai bên."
      },
      {
        question: "Upselling trong XNK có nghĩa là gì?",
        options: ["Bán hàng lên cao", "Bán thêm sản phẩm hoặc số lượng lớn hơn cho khách cũ", "Bán hàng giá rẻ", "Bán hàng lậu"],
        correctAnswer: 1,
        explanation: "Upselling là nghệ thuật khuyến khích khách mua nhiều hơn hoặc mua sản phẩm cao cấp hơn."
      }
    ]
  }
];
