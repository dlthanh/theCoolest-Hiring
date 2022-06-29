import React, { FC, PropsWithChildren } from "react";

interface JobInterface {
    job: string,
    quantity: number
    salary: string
    description: string[],
    requirements: string[]
}

interface TuyenDungItemProps {
    data: JobInterface
}

const TuyenDungItem: FC<TuyenDungItemProps> = ({ data }): JSX.Element => {
  return (
    <div className="hiring-item">
      <div className="hiring-title">{data.job}</div>

      <div className="hiring-info">
        <div className="hiring-info-item">Số lượng: {data.quantity}</div>
        <div className="hiring-info-item">Mức lương: {data.salary}</div>
      </div>

      <div className="hiring-main">
        <div className="col">
          <div className="hiring-subtitle">Mô tả công việc</div>
          <ul className="hiring-content">
            {data.description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="col">
          <div className="hiring-subtitle">Yêu cầu ứng viên</div>
          <ul className="hiring-content">
            {data.requirements.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TuyenDungItem;