import * as notificationData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
    let contexts = []
    notificationData.forEach(notification => {
        if (notification.author.id === userId) {
            contexts.push(notification.context)
        }
    });
}

export default getAllNotificationsByUser;