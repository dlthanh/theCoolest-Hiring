import React, { FC } from "react";

const IMAGES = [
  { src: "https://i.pinimg.com/564x/c6/e5/ae/c6e5ae27f0b034d4acc237b28070dbab.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/08/d4/83/08d4834ff8d6577f9e79d87185578b25.jpg", width: 2, height: 3 },
  { src: "https://i.pinimg.com/564x/7a/d3/da/7ad3dae85dc1ac5ba5a4840321dd1344.jpg", width: 1, height: 1 },
  { src: "https://i.pinimg.com/564x/c1/d4/d2/c1d4d241080b634dcb05c161112148db.jpg", width: 188, height: 125 },
];

const WhyWeDoThis: FC = (): JSX.Element => {
  return (
    <div className="about-item">
      <div className="about-text">
        <div className="about-heading">Vì sao chúng tôi tạo nên The Coolest?</div>
        <div className="about-content">
            Chúng tôi được sinh ra ở thế hệ mà tiền bạc trong xã hội không quá dư giả, tất cả những gì bố mẹ chúng tôi có đều dành cho ăn, học, ăn, học, học tiếp, ăn và lại học tiếp. Tôi chân quý và biết ơn điều đó nhưng sâu trong tim tôi biết có điều gì đó còn thiếu. Và đó chính là mong muốn được vui, được chơi, hết mình và đúng nghĩa. Tôi tin rằng cái chúng ta cần không chỉ là thức ăn để tồn tại, mà còn là niềm vui để sống, để tâm hồn bên trong mỗi người có thể cảm nhận, có thể tận hưởng và có thể yêu thương. The Coolest chính là nơi chúng tôi mang lại sự phấn khích đó cho từng khách hàng. Với chúng tôi, Niềm vui là giá trí lớn nhất mà chúng tôi có sứ mệnh mang lại cho từng khách hàng, những người đã ưu ái đến với nơi đây.
        </div>
      </div>

      <div className="about-game">
        <div className="about-game-item">
        </div>

        <div className="about-game-item">
        </div>

        <div className="about-game-item">
        </div>
      </div>
    </div>
  );
};

export default WhyWeDoThis;