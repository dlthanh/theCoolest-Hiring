import React, { FC } from "react";
import WhoWeAre from "./WhoWeAre";
import WhatWePursuit from "./WhatWePursuit";
import WhyWeDoThis from "./WhyWeDoThis";
import CoreValue from "./CoreValue";
import WhyYouWhyUs from "./WhyYouWhyUs";

const About: FC<{onDirect: () => void}> = ({ onDirect }): JSX.Element => {
  return (
    <div className="about">
      <WhoWeAre />
      <WhatWePursuit />
      <WhyWeDoThis />
      <CoreValue />
      <WhyYouWhyUs onDirect={onDirect}/>
    </div>
  );
};

export default About;