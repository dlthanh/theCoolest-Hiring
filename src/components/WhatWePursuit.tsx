import React, { FC, useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const IMAGES = [
  { src: "./assets/images/img-2.jpg", width: 3, height: 4 },
  { src: "./assets/images/img-3.jpg", width: 1242, height: 1549 },
  { src: "./assets/images/img-4.jpg", width: 4, height: 5 },
];

const WhatWePursuit: FC = (): JSX.Element => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="about-item">
      <div className="about-text">
        <div className="about-heading">Điều chúng tôi theo đuổi</div>
        <div className="about-content">
                    Trong nhiều năm sinh ra và lớn lên ở Việt Nam chúng tôi vẫn luôn cảm thấy bế tắc khi nghĩ về chuyện: “Cuối tuần này đi đâu?”. Loanh quanh trong thành phố chỉ chỉ có đi ăn, đi xem phim, đi shopping và nightlife. Sự mong mỏi có những loại hình giải trí mới luôn ám ảnh chúng tôi qua nhiều năm và sau cùng chúng tôi đã bắt tay vào xây dựng một nơi như thế. Một nơi có những game và hoạt động giải trí thật vui, không gian thật chill và trải nghiệm thật tốt. Một nơi đầy sự phấn khích mà vẫn vô cùng văn minh, một nơi để đến hàng tuần, một nơi tên là The Coolest.
        </div>
      </div>

      <Gallery photos={IMAGES} onClick={openLightbox} />
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={IMAGES.map(x => ({ ...x, source: x.src }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default WhatWePursuit;