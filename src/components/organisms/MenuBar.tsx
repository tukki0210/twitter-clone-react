import { FC } from 'react'

import HomeButton from '../molecules/HomeButton'
import NotificationButton from '../molecules/NotificationButton'
import MailButton from '../molecules/MailButton'
import BookMarkButton from '../molecules/BookMarkButton'
import ListButton from '../molecules/ListButton'
import ProfileButton from '../molecules/ProfileButton'

const MenuBar: FC = () => (
    <>
        <HomeButton />
        <NotificationButton />
        <MailButton />
        <BookMarkButton />
        <ListButton />
        <ProfileButton />
    </>
)


export default MenuBar;