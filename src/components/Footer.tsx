import React, { FC } from "react";
import Contact from "./Contact";

const Footer: FC = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="./assets/images/logo.svg" alt=""/>
      </div>
      <div className="footer-info">
        <div className="footer-info-item">
          <div className="label">Địa chỉ:</div>
          <div className="content">3/184 Thạch Bàn, phường Thạch Bàn, quận Long Biên, Hà Nội</div>
        </div>

        <div className="footer-info-item">
          <div className="label">Email:</div>
          <div className="content">tuyendung@lep.vn</div>
        </div>

        <div className="footer-info-item">
          <div className="label">Hotline:</div>
          <div className="content">0986.489.380 - Ms. Vân</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;