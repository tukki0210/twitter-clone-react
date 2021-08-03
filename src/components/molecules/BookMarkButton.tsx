import { FC } from 'react';
import Bookmark from '@material-ui/icons/Bookmark'

const BookMarkButton: FC = () => (
    <div className="flex m-2">
        <Bookmark />
        <p className="ml-2 font-bold">ブックマーク</p>
    </div>
)

export default BookMarkButton;