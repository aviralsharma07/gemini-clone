import React from "react";
import "./Main.css";
import assets from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Avi</span>
          </p>
          <p>How can I help you Today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful Places to see on an upcoming Road Trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly Summarize this concept: Urban Planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a Prompt" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <div className="bottom-info">
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
