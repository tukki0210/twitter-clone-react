import { FC } from 'react';
import ListAlt from '@material-ui/icons/ListAlt'

const ListButton: FC = () => (
    <div className="flex m-2">
        <ListAlt />
        <p className="ml-2 font-bold">リスト</p>
    </div>
)

export default ListButton;