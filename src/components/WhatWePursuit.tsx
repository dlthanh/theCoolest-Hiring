import React, { FC } from "react";
import Gallery from "react-photo-gallery";

const IMAGES = [
  { src: "https://i.pinimg.com/564x/c6/e5/ae/c6e5ae27f0b034d4acc237b28070dbab.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/08/d4/83/08d4834ff8d6577f9e79d87185578b25.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/7a/d3/da/7ad3dae85dc1ac5ba5a4840321dd1344.jpg", width: 1, height: 1 }
];

const WhatWePursuit: FC = (): JSX.Element => {
  return (
    <div className="about-item">
      <div className="about-text">
        <div className="about-heading">What we pursuit?</div>
        <div className="about-content">
            Trong nhiều năm sinh ra và lớn lên ở Việt Năm chúng tôi vẫn luôn cảm thấy bế tắc khi nghĩ về chuyện: “Cuối tuần này đi đâu?”. Loanh quanh trong thành phố chỉ chỉ có đi ăn, đi xem phim, đi shopping và nightlife. Sự mong mỏi có những loại hình giải trí mới luôn ám ảnh chúng tôi qua nhiều năm và sau cùng chúng tôi đã bắt tay vào xây dựng một nơi như thế. Một nơi có những game và hoạt động giải trí thật vui, không gian thật chill và trải nghiệm thật tốt. Một nơi đầy sự phấn khích mà vẫn vô cùng văn minh, một nơi để đến hàng tuần, một nơi tên là The Coolest.
        </div>
      </div>

      <div className="about-images">
        {/*<Images />*/}
      </div>

      <Gallery photos={IMAGES} />
    </div>
  );
};

export default WhatWePursuit;