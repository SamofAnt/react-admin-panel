import { Store } from 'react-notifications-component'

class NotificationService{

    getNotification(type, title, message) {
        switch (type) {

            case 'success':
              Store.addNotification({
                title: title,
                message: message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
              break;
      
            case 'error':
              Store.addNotification({
                title: title,
                message: message,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
              break;
          }
    }
}

export default new NotificationService()