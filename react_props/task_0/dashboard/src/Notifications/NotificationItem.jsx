export default function NotificationItem({ type, value, html }) {
  if (html) {
    return (
      <li data-priority={type} dangerouslySetInnerHTML={{ __html: value }}></li>
    );
  } else {
    return <li data-priority={type}>{value}</li>;
  }
}