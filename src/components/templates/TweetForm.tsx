/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

type FormData = {
    tweet: string;
}

const TweetForm: FC = () => {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = ({ tweet }: FormData) => {

        axios.post('/api', {
            tweetUser: {
                userName: 'tsukuda',
                userId: '1111'
            },
            tweetBody: tweet
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className="w-2/3 border-2 border-gray-300 rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} >
                <textarea
                    {...register("tweet")}
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