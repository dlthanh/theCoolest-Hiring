import React, { FC } from "react";
import Gallery from "react-photo-gallery";

const IMAGES = [
  { src: "https://i.pinimg.com/564x/c6/e5/ae/c6e5ae27f0b034d4acc237b28070dbab.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/08/d4/83/08d4834ff8d6577f9e79d87185578b25.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/7a/d3/da/7ad3dae85dc1ac5ba5a4840321dd1344.jpg", width: 1, height: 1 },
  { src: "https://i.pinimg.com/564x/c1/d4/d2/c1d4d241080b634dcb05c161112148db.jpg", width: 188, height: 125 },
];

const CoreValue: FC = (): JSX.Element => {
  return (
    <div className="about-item">
      <div className="about-text  about-text-row">
        <div className="about-heading">Những Giá trị cốt lõi</div>
        <div className="about-content">
          <p>Có nhiều kiểu niềm vui trong cuộc sống, nhưng niềm vui ở The Coolest là một màu sắc rất thuần khiết và văn minh. Trải nghiệm đó chỉ có thể đạt được thông qua các giá trị cốt lõi dưới đây:</p>

          <ul>
            <li><em><strong>Lấy sự bình thường làm Kẻ thù lớn nhất:</strong></em> The Coolest không phải nơi để an phận, kiếm một công việc sống qua ngày. Đây là chuyến tàu của những người có lý tưởng sống, có sự háo hức khám phá bản thân và vượt lên những giới hạn thông thường.</li>
            <li><em><strong>Lấy Khách hàng làm trung tâm:</strong></em> Một trải nghiệm tuyệt vời là thứ khách hàng tìm kiếm ở The Coolest và chúng tôi muốn chắc chắn họ sẽ có được điều đó một cách xuất sắc nhất.</li>
            <li><em><strong>Lấy sự Văn minh làm định vị:</strong></em> Khi khách hàng nghĩ về The Coolest giữa những lựa chọn  khác, họ sẽ nhớ về một không gian giải trí rất Văn minh và đặc biệt.</li>
            <li><em><strong>Lấy sự Chân thành làm chìa khóa vạn năng:</strong></em> Khi đứng trước nhiều lựa chọn cho một việc quan trọng thì chân thành luôn là giải pháp hiệu quả nhất, đơn giản nhất và có lợi nhất.</li>
            <li><em><strong>Lấy Văn hóa công ty làm tài sản lớn nhất:</strong></em> Mọi quy trình và sản phẩm đều có thể sao chép nhưng văn hóa và con người thì không.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;