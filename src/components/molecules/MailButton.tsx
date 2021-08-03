import { FC } from 'react';
import Mail from '@material-ui/icons/Mail'

const MailButton: FC = () => (
    <div className="flex m-2">
        <Mail />
        <p className="ml-2 font-bold">メッセージ</p>
    </div>
)

export default MailButton;