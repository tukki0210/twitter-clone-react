/* eslint-disable react/button-has-type */
import { FC, useState } from 'react'
import FavMark from '../atoms/FavMark'

const Comment: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex">
            <button onClick={() => setCount(count + 1)}>
                <FavMark />
            </button>
            {count}
        </div>
    )
}

export default Comment;