import { FC } from 'react';

type Props = {
    tweetUser: {
        userName: string;
        userId: string;
    }
}
const TweetUser: FC<Props> = ({ tweetUser }) => (
    <div className="flex">
        <div className="font-bold mr-2">{tweetUser.userName}</div>
        <div className="text-gray-500">@{tweetUser.userId}</div>
    </div>
);


export default TweetUser;
