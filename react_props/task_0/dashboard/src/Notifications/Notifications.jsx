import React from "react";
import "./Notifications.css";
import close from "../assets/close.png";
import { getLatestNotifications } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        Here is the list of notifications{" "}
        <button
          aria-label="close"
          style={{ textAlign: "right", display: "inline" }}
          onClick={() => console.log("Close button has been clicked")}
        >
          <img src={close} alt="close" height={20} width={20} />
        </button>
      </p>
      <ul>
        <NotificationItem value="New course available" />
        <NotificationItem value="New resume available" type={"1"} />
        <NotificationItem value={getLatestNotifications()} html type={"1"} />
      </ul>
    </div>
  );
};

export default Notifications;
