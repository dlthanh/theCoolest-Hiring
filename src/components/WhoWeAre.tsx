import React, { FC } from "react";
import Gallery from "react-photo-gallery";

const IMAGES = [
  { src: "https://i.pinimg.com/564x/c6/e5/ae/c6e5ae27f0b034d4acc237b28070dbab.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/08/d4/83/08d4834ff8d6577f9e79d87185578b25.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/7a/d3/da/7ad3dae85dc1ac5ba5a4840321dd1344.jpg", width: 1, height: 1 }
];

const WhoWeAre: FC = (): JSX.Element => {
  return (
    <div className="about-item">
      <div className="about-text">
        <div className="about-heading">Who we are?</div>
        <div className="about-content">
                  The Coolest là một dự án Khu tổ hợp Giải trí cho người trưởng thành, phục vụ nhu cầu giải trí lành mạnh và phấn khích. Đặc trưng trong các dịch vụ của The Coolest là sự kết hợp giữa 3 yếu tố: sự Phấn khích, sự Văn minh và sự Phục vụ. Khu Tổ hợp The Coolest đầu tiên đặt tại Long Biên, Hà Nội với các hoạt động giải trí vô cùng trendy: bắn cung, ném rìu, camping, chiếu phim ngoài trời, boardgames, kios check-in, cafe, tiệc BBQ, nhạc sống, tarot, … Đến với The Coolest để có những trải nghiệm thư giãn đúng nghĩa, lành mạnh và mới mẻ mỗi tuần.
        </div>
      </div>

      <div className="about-images">
        {/*<Images />*/}
      </div>

      <Gallery photos={IMAGES} />
    </div>
  );
};

export default WhoWeAre;