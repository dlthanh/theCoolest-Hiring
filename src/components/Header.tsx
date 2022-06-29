import React, { FC } from "react";

interface HeaderProps {
    onDirect: (key: string) => void
}

const Header: FC<HeaderProps> = ({ onDirect }): JSX.Element => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="./assets/images/logo.svg" alt="theCoolest Logo"/>
      </div>

      <div className="header-nav">
        <div className="header-nav-item"onClick={() => onDirect("trang-chu")}>Who we are?</div>
        <div className="header-nav-item" onClick={() => onDirect("tuyen-dung")}>Vacancy</div>
        <div className="header-nav-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;