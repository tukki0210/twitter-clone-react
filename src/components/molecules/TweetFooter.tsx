import {FC} from 'react';

import CommentMark from '../atoms/CommentMark';
import FavMark from '../atoms/FavMark';
import RepeatMark from '../atoms/RepeatMark';
import ShareMark from '../atoms/ShareMark';

const TweetFooter:FC = () => (
    <div className="flex justify-between mt-4 mx-6">
        <CommentMark />
        <RepeatMark />
        <FavMark />
        <ShareMark />
    </div>
)

export default TweetFooter;