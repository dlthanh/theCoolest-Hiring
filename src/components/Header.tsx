import React, { FC } from "react";

const Header: FC = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="/assets/images/logo.svg" alt="theCoolest Logo"/>
      </div>

      <div className="header-nav">
        <div className="header-nav-item">Who we are?</div>
        <div className="header-nav-item">Vacancy</div>
        <div className="header-nav-item">Contact</div>
      </div>
    </div>
  );
};

export default Header;