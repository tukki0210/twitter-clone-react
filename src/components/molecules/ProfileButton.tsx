import { FC } from 'react';
import PersonOutline from '@material-ui/icons/PersonOutline'

const ProfileButton: FC = () => (
    <div className="flex m-2">
        <PersonOutline />
        <p className="ml-2 font-bold">プロフィール</p>
    </div>
)

export default ProfileButton;