import React, { FC } from "react";

interface JobInterface {
    job: string,
    quantity: number
    salary: string
    working_time: string
    address: string
    description: string[],
    benefits: string[]
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
        <div className="row">
          <div className="hiring-info-item"><span>Số lượng:</span> {data.quantity}</div>
          <div className="hiring-info-item"><span>Mức lương:</span> {data.salary}</div>
        </div>
        <div className="row">
          <div className="hiring-info-item"><span>Thời gian:</span> {data.working_time}</div>
        </div>
        <div className="row">
          <div className="hiring-info-item"><span>Địa chỉ:</span> {data.address}</div>
        </div>
      </div>

      <div className="hiring-main">
        <div className="col">
          <div className="hiring-subtitle">Mô tả công việc</div>
          <ul className="hiring-content">
            {data.description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="col">
          <div className="hiring-subtitle">Yêu cầu</div>
          <ul className="hiring-content">
            {data.requirements.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>

        <div className="col">
          <div className="hiring-subtitle">Quyền lợi</div>
          <ul className="hiring-content">
            {data.benefits.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TuyenDungItem;