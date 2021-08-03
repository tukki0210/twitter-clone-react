/* eslint-disable react/self-closing-comp */
import { FC } from 'react'

const TweetForm: FC = () => (
    <div className="w-2/3 border-2 border-gray-300 rounded-xl">
        <form action="" method="post" >
            <textarea name="tweet" 
                placeholder="いまどうしてる？"
                rows={4}
                cols={100}
                className="w-full h-full" ></textarea>
            <div className="flex flex-row-reverse border-t-2 border-gray-100" >
            <input type="submit" value="ツイートする" 
                className="bg-blue-500 text-white text-bold p-2 m-2 rounded-full"/>
            </div>
        </form>
    </div>
)

export default TweetForm