import React, { FC } from "react";
import JOBS from "../seeds/jobs.json";
import TuyenDungItem from "./TuyenDungItem";

const TuyenDung: FC = (): JSX.Element => {
  return (
    <div className="tuyendung">
      <div className="page-header">
        <div className="page-heading">We are looking for</div>
      </div>

      <div className="hiring">
        {JOBS.map((item, index) => <TuyenDungItem data={item} key={index} />)}
      </div>
    </div>
  );
};

export default TuyenDung;