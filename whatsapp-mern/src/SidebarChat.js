import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="SidebarChat">
      <Avatar />
      <div className="SidebarChat_info">
        <h2>Person name</h2>
        <p>last message send</p>
      </div>
    </div>
  );
}

export default SidebarChat;
