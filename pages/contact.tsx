import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DefaultModal from "../components/DefaultModel";

const Contact = () => {
  const form = useRef(null);
  const [user_name, setUserName] = useState("");
  const [user_email, setUserEmail] = useState("");
  const [user_message, setUserMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [isData, setIsData] = useState(false);

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user_name !== "" && user_email !== "" && user_message !== "") {
      setIsData(true);
    } else {
      setIsData(false);
      setModalMsg("빈 칸없이 입력 부탁드립니다:)");
      setShowModal(!showModal);
    }

    if (
      form.current !== null &&
      isData !== false &&
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID !== undefined &&
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID !== undefined
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
          process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            setModalMsg("이메일 전송 완료!");
            setShowModal(!showModal);
            setUserEmail("");
            setUserMessage("");
            setUserName("");
            alert();
            console.log("form", form.current);
          },
          (error) => {
            setModalMsg(`이메일 전송 실패 TT`);
            setShowModal(!showModal);
          }
        );
    }
  };

  return (
    <>
      {showModal && (
        <DefaultModal
          msg={modalMsg}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div>
        <h1 className="px-2 text-white bg-MainColor page-title">Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-container">
            <label className="form-label">&#42; Name</label>
            <input
              type="text"
              name="user_name"
              value={user_name}
              onChange={(e) => setUserName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-container">
            <label className="form-label">&#42; Email</label>
            <input
              type="email"
              name="email"
              value={user_email}
              onChange={(e) => setUserEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="block w-full form-container">
            <label className="form-label">&#42; Message</label>
            <textarea
              name="message"
              cols={3000}
              className="rounded-lg h-[28rem] p-2 form-input w-full"
              value={user_message}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="float-right px-10 py-2 text-gray-800 bg-gray-400 rounded-lg text-md lg:text-lg lg:py-4 lg:px-24 hover:text-white hover:bg-MainColor"
          >
            보내기
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
