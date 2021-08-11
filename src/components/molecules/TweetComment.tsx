/* eslint-disable react/button-has-type */
import { FC, useState } from 'react'
import CommentMark from '../atoms/CommentMark'

const Comment: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex">
            <button onClick={() => setCount(count + 1)}>
                <CommentMark />
            </button>
            {count}
        </div>
    )
}

export default Comment;