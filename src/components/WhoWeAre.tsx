import React, { FC, useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const IMAGES = [
  { src: "./assets/images/img-8.jpg", width: 1, height: 1 },
  { src: "./assets/images/img-9.jpg", width: 2, height: 3 },
  { src: "./assets/images/img-10.jpg", width: 1, height: 1 },
  { src: "./assets/images/img-11.jpg", width: 3, height: 4 },
  { src: "./assets/images/img-12.jpg", width: 1400, height: 933 },
];

const WhoWeAre: FC = (): JSX.Element => {
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
        <div className="about-heading">Chúng tôi là ai?</div>
        <div className="about-content">
                    The Coolest là một dự án Khu tổ hợp Giải trí cho người trưởng thành, là sự kết hợp giữa 3 yếu tố: Các trò chơi vận động hiện đại, Không gian chill từng khoảnh khắc và Trải nghiệm dịch vụ thiên thần. Khu Tổ hợp đầu tiên được đặt tại Long Biên, Hà Nội với các hoạt động giải trí vô cùng trendy như bắn cung, ném rìu, camping, chiếu phim ngoài trời, boardgames, kios check-in, cafe, tiệc BBQ, nhạc sống, tarot… Cùng với đó là một ứng dụng trên di động để khách hàng có thể trải nghiệm Khu tổ hợp một cách dễ dàng, thuận thiện và độc đáo nhất. Tầm nhìn của The Coolest tới năm 2025 sẽ có 10 chi nhánh trên toàn quốc, tập trung ở các thành phố lớn và khu du lịch.
        </div>
      </div>

      <Gallery photos={IMAGES} limitNodeSearch={3} onClick={openLightbox} />
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

export default WhoWeAre;