import { FC } from 'react';

import MenuBar from '../organisms/MenuBar';
import TweetForm from '../organisms/TweetForm';
import UserTweet from '../organisms/UserTweet'

const TopPage: FC = () => (
    <div className="flex justify-between">
        <aside className="w-1/5 m-4 border-r-2 border-gray-100">
            <MenuBar />
        </aside>
        <main className="m-4">
            <TweetForm />
            <div className="mt-4">
                <UserTweet />
            </div>
        </main>
    </div>
)

export default TopPage;
