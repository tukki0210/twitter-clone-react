/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';

import MenuBar from '../organisms/MenuBar';
import TweetForm from '../templates/TweetForm';
import UserTweet from '../templates/UserTweet'
import Login from '../templates/LoginForm'

type TweetType = {
    tweetId: number;
    tweetUser: {
        userName: string;
        userId: string;
    };
    tweetBody: string;
}

const useSSE = () => {

    const firstTweet: TweetType =
    {
        tweetId: 1,
        tweetUser: {
            userName: "tsukuda",
            userId: "1111"
        },
        tweetBody: "フロント側の最初のツイート"
    }

    const [tweet, setTweet] = useState<TweetType>(firstTweet);

    useEffect(() => {
        // SSEによるサーバからの受信
        // ロード時にSSEを待ち受ける
        const eventSource = new EventSource('/api')
        eventSource.addEventListener('message', e => {
            setTweet(JSON.parse(e.data))
        })
        eventSource.addEventListener('error', e => console.log('SSEエラー', e))

        return () => eventSource.close()
    }, [])

    return tweet
}

const useAllTweet = (tweet: TweetType) => {
    // SSEによってtweetの値に変更があれば、allTweetを更新
    const [allTweet, setAllTweet] = useState<TweetType[]>([]);

    useEffect(() => {
        setAllTweet([...allTweet, tweet])
        console.log(tweet)
    }, [tweet])

    return allTweet
}

const firstUser = {
    userName: 'tsukuda',
    userId: '1111'
}

// const secondUser = {
//     userName: 'tukki',
//     userId: '2222'
// }

// const useUserTweet = () => {
//     const [user, setUser] = useState(firstUser)

//     useEffect(() => {
//         setUser(secondUser)
//     }, [])

//     return user
// }


const TopPage: FC = () => {

    const newTweet = useSSE()

    const allTweet = useAllTweet(newTweet)

    // const user = useUserTweet()

    const [user, setUser] = useState(firstUser)

    return (
        <div className="flex justify-between">
            <aside className="w-1/5 m-4 border-r-2 border-gray-100">
                <MenuBar />
                <Login setUser={setUser} />
            </aside>
            <main className="m-4">
                <TweetForm user={user} />
                <div className="mt-4 w-2/3 border-gray-200 border-2">
                    <UserTweet AllTweet={allTweet} />
                </div>
            </main>
        </div>
    )
}

export default TopPage;
