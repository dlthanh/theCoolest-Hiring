import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header-logo">
        <img src="./assets/images/logo.svg" alt="theCoolest Logo"/>
      </div>

      <div className="header-nav">
        <div className="header-nav-item" onClick={() => navigate("/")}>Who we are?</div>
        <div className="header-nav-item" onClick={() => navigate("/tuyen-dung")}>Vacancy</div>
        <div className="header-nav-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;