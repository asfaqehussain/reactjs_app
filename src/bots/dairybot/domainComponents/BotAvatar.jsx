import React from "react";

import image from "../../../shared/assets/images/bottle.png";

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <img
          src={image}
          alt="My Image"
          style={{ height: "20px", width: "20px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default BotAvatar;
