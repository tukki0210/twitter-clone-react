import { FC } from 'react';

import TweetUserName from '../molecules/TweetUser'
import TweetBody from '../molecules/TweetBody'
import TweetFooter from '../molecules/TweetFooter'

type Props = {
    AllTweet: {
        tweetId: number;
        tweetUser: {
            userName: string;
            userId: string;
        };
        tweetBody: string;
    }[]
}

const UserTweet: FC<Props> = ({ AllTweet }) => (
    <div>
        {AllTweet.map(({ tweetId, tweetUser, tweetBody }) => (
            <div key={tweetId} className="w-full p-2 border-t-2 border-gray-100">
                <TweetUserName tweetUser={tweetUser} />
                <TweetBody tweetBody={tweetBody} />
                <TweetFooter />
            </div>
        ))}
    </div>
)


export default UserTweet;
