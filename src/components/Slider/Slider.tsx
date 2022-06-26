import React, { FC, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SLIDES from "../../seeds/contents.json";

const Slider: FC = (): JSX.Element => {
  const SlideItems = useMemo(() => {
    return SLIDES.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="slide-background">
          {/*<img src={item.image} alt=""/>*/}
        </div>

        <div className="slide-content">
          <div className="slide-heading">{item.title}</div>
          <div className="slide-text">{item.content}</div>
        </div>
      </SwiperSlide>
    ));
  }, [SLIDES]);

  return (
    <Swiper>
      {SlideItems}
    </Swiper>
  );
};

export default Slider;