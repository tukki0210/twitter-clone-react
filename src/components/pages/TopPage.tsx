/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import MenuBar from '../organisms/MenuBar';
import TweetForm from '../templates/TweetForm';
import UserTweet from '../templates/UserTweet'
import Login from '../templates/LoginForm'

type UserType = {
    userName: string;
    readonly userId: string;
}

type TweetType = {
    readonly tweetId: string;
    tweetUser: UserType;
    tweetBody: string;
}


const useSSE = () => {

    const firstTweet: TweetType =
    {
        tweetId: '1111',
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
        const eventSource = new EventSource('/api/tweet')
        eventSource.addEventListener('message', e => {
            setTweet(JSON.parse(e.data))
        })
        eventSource.addEventListener('error', e => console.log('SSEエラー', e))

        return () => eventSource.close()
    }, [])

    return tweet
}

const useAllTweet = (tweet: TweetType) => {

    const [allTweet, setAllTweet] = useState<TweetType[]>([]);

    // タイムラインのツイートを初回レンダリング時に取得する
    useEffect(() => {
        const loadAllTweet = async (): Promise<void> => {
            try {
                const response = await axios.get('/api/tweet/all')
                /* eslint-disable @typescript-eslint/no-unsafe-member-access */
                if (response.data.allTweet.length > 1) {
                    setAllTweet([tweet, ...response.data.allTweet])
                    console.log(allTweet)
                }
            } catch (error) {
                console.log(error)
            }
        }

        void loadAllTweet()
    }, [])

    // SSEによってtweetの値に変更があれば、allTweetを更新
    useEffect(() => {
        setAllTweet([...allTweet, tweet])
        console.log(tweet)
    }, [tweet])

    return allTweet
}
const firstUser: UserType = {
    userName: 'tsukuda',
    userId: '1111'
}

const TopPage: FC = () => {

    const newTweet = useSSE()

    const allTweet = useAllTweet(newTweet)

    const [user, setUser] = useState<UserType>(firstUser)

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