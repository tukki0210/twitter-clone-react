import { FC, useState } from 'react';

import MenuBar from '../organisms/MenuBar';
import TweetForm from '../organisms/TweetForm';
import UserTweet from '../organisms/UserTweet'

type TweetType = {
    tweetId: number;
    tweetUser: {
        userName: string;
        userId: string;
    };
    tweetBody: string;
}

const TopPage: FC = () => {

    const FirstTweet: TweetType[] = [
        {
            tweetId: 1,
            tweetUser: {
                userName: "tsukuda",
                userId: "1111"
            },
            tweetBody: "最初のツイート"
        }]


    const [AllTweet, setAllTweet] = useState(FirstTweet);

    return (
        <div className="flex justify-between">
            <aside className="w-1/5 m-4 border-r-2 border-gray-100">
                <MenuBar />
            </aside>
            <main className="m-4">
                <TweetForm AllTweet={AllTweet} setAllTweet={setAllTweet} />
                <div className="mt-4 w-2/3 border-gray-200 border-2">
                    <UserTweet AllTweet={AllTweet} />
                </div>
            </main>
        </div>
    )
}

export default TopPage;
