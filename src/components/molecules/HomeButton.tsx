import { FC } from 'react';
import Home from '@material-ui/icons/Home'

const HomeButton: FC = () => (
    <div className="flex m-2">
        <Home />
        <p className="ml-2 font-bold">ホーム</p>
    </div>
)

export default HomeButton;