import React, { FC, useEffect, useState } from "react";

const Header: FC = (): JSX.Element => {
  const [onScroll, setOnScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    });
  }, []);

  return (
    <div className={`header ${onScroll && "fixed"}`}>
      <div className="header-logo">
        <img src="./assets/images/logo.svg" alt="theCoolest Logo"/>
      </div>

      <div className="header-nav">
        <div className="header-nav-item">
          <a href="#who-we-are">Who we are?</a>
        </div>
        <div className="header-nav-item">
          <a href="#tuyen-dung">Vacancy</a>
        </div>
        <div className="header-nav-item">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;