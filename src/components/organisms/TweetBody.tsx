import {FC} from 'react';

type Props = {
    tweetBody: string
}
const TweetBody:FC<Props> = ({tweetBody}) =>  (
        <div>
            <p>{tweetBody}</p>
        </div>
    );


export default TweetBody;
