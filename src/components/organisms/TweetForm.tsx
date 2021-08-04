/* eslint-disable react/jsx-props-no-spreading */
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

type TweetType = {
    tweetId: number;
    tweetUser: {
        userName: string;
        userId: string;
    };
    tweetBody: string;
}

type Props = {
    AllTweet: TweetType[]
    setAllTweet: React.Dispatch<React.SetStateAction<TweetType[]>>
}

type FormData = {
    tweet: string;
}

const TweetForm: FC<Props> = ({ AllTweet, setAllTweet }) => {

    const [id, setId] = useState(2);

    const { register, handleSubmit } = useForm<FormData>();
    // const {ref, onChange, onBlur, name} = register('tweet')
    const onSubmit = ({ tweet }: FormData) => {
        const TweetData: TweetType = {
            tweetId: id,
            tweetUser: {
                userName: 'tsukuda',
                userId: '1111'
            },
            tweetBody: tweet
        }
        setAllTweet([...AllTweet, TweetData])
        setId(id+1)
    }

    return (
        <div className="w-2/3 border-2 border-gray-300 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} >
                <textarea
                    {...register("tweet")}
                    // name="tweet"
                    // onChange={name}
                    placeholder="いまどうしてる？"
                    rows={4}
                    cols={100}
                    className="w-full h-full" />
                <div className="flex flex-row-reverse border-t-2 border-gray-100" >
                    <input type="submit" value="ツイートする"
                        className="bg-blue-500 text-white text-bold p-2 m-2 rounded-full" />
                </div>
            </form>
        </div>
    )
}

export default TweetForm