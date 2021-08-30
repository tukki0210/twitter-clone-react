// import { FC } from 'react';
// import { format, getDate, getMonth, getYear } from 'date-fns';
import { format } from 'date-fns';

const TweetDate = () => {

    const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

    return (
        <div>
            {date}
        </div>
    )
}

export default TweetDate;