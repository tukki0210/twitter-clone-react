import { FC } from 'react';
import Notifications from '@material-ui/icons/Notifications'

const NotificationButton: FC = () => (
    <div className="flex m-2">
        <Notifications />
        <p className="ml-2 font-bold">通知</p>
    </div>
)

export default NotificationButton;