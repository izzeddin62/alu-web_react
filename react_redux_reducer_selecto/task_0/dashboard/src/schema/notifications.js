import * as notifications from '../../../../notifications.json';
import { schema, normalize } from 'normalizr'

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
const notificationsList = new schema.Array(notification);
export const normalizedData = normalize(notifications.default, notificationsList);
export function getAllNotificationsByUser(userId) {
  const result = [];
  for (let key in normalizedData.entities.notifications) {
    if (normalizedData.entities.notifications[key].author === userId) {
      const context = normalizedData.entities.notifications[key].context;
      result.push(normalizedData.entities.messages[context]);
    }
  }
  return result;
}