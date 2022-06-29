import React, { FC, Fragment } from "react";
import Hero from "./Hero";
import About from "./About";

const Home: FC<{onDirect: () => void}> = ({ onDirect }): JSX.Element => {
  return (
    <Fragment>
      <Hero />
      <About onDirect={onDirect} />
    </Fragment>
  );
};

export default Home;