import {FC} from 'react';

import Comment from '../molecules/TweetComment';
import Fav from '../molecules/TweetFav';
import RepeatMark from '../atoms/RepeatMark';
import ShareMark from '../atoms/ShareMark';

const TweetFooter:FC = () => (
    <div className="flex justify-between mt-4 mx-6">
        <Comment />
        <RepeatMark />
        <Fav />
        <ShareMark />
    </div>
)

export default TweetFooter;