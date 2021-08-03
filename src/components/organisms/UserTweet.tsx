import {FC} from 'react';

import TweetUserName from '../molecules/TweetUser'
import TweetBody from '../molecules/TweetBody'


const UserTweet:FC = () => {

    const Tweet = {
        tweetUser : {
            userName:"tsukuda",
            userId : "1111"
        },
        tweetBody : "testtesttesttesttesttesttesttesttesttesttesttesttest"
    }

    return (
        <div className="w-full p-2 border-t-2 border-gray-100">
            <TweetUserName tweetUser={Tweet.tweetUser}/>
            <TweetBody tweetBody = {Tweet.tweetBody}/>
        </div>
    );
}

export default UserTweet;
