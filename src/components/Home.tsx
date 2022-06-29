import React, { FC, Fragment } from "react";
import Hero from "./Hero";
import About from "./About";

const Home: FC = (): JSX.Element => {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
};

export default Home;