import React from "react";
import close from "../assets/close.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite/no-important";

class Notifications extends React.Component {
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  // shouldComponentUpdate(nextProps) {
  //   return (
  //     nextProps.listNotifications.length > this.props.listNotifications.length
  //   );
  // }
  render() {
    console.log(this.props.displayDrawer);
    return (
      <div className={css(styles.Notifications)}>
        <div className={css(styles.text)}>
          <p onClick={this.props.handleDisplayDrawer}>
            Here is the list of notifications{" "}
          </p>
          <button
            aria-label="close"
            style={{ textAlign: "right", display: "inline" }}
            onClick={this.props.handleHideDrawer}
          >
            <img src={close} alt="close" height={20} width={20} />
          </button>
        </div>

        {this.props.displayDrawer && <ul>
          {this.props.listNotifications.length > 0 ? (
            this.props.listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                id={id}
                markAsRead={this.markAsRead}
                key={id}
                type={type}
                value={value}
                html={html}
              />
            ))
          ) : (
            <NotificationItem value="No new notification for now" />
          )}
        </ul>}
      </div>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const styles = StyleSheet.create({
  Notifications: {
    border: "2px solid pink",
    padding: "20px",
  },

  text: { display: "flex", justifyContent: "space-between" },
});

export default Notifications;
