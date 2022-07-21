import React, { FC, FormEvent, MutableRefObject, useRef } from "react";
import emailjs from "@emailjs/browser";
import JOBS from "../seeds/jobs.json";

const Contact: FC = (): JSX.Element => {
  const form = useRef<HTMLFormElement>() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm("service_8syqdsh", "template_zm3qwks", form.current, "Cu47hTG1cjwYiONdD")
      .then((result) => {
        alert("Gửi thành công");
      }, (error) => {
        alert("Gửi thất bại. Định dạnh file không được chấp nhận");
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-form">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form-item">
            <label>Họ tên:</label>
            <input type="text" name="full_name" required />
          </div>

          <div className="form-item">
            <label>Số điện thoại:</label>
            <input type="text" name="phone_number" required />
          </div>

          <div className="form-item">
            <label>Vị trí ứng tuyển:</label>
            <select name="job_title" required>
              {JOBS.map((item, index) => <option value={item.job} key={index}>{item.job}</option>)}
            </select>
          </div>

          <div className="form-item">
            <label>Hồ sơ ứng tuyển:</label>
            <input type="file" name="Hồ sơ ứng tuyển" accept="application/msword|application/pdf" required />
          </div>

          <div className="form-item">
            <label>Tin nhắn:</label>
            <textarea name="note" rows={3}></textarea>
          </div>

          <div className="form-action">
            <input type="submit" value="Gửi" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;