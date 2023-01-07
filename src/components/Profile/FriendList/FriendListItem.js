import PropTypes from 'prop-types';
// import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";
import {Item, SpanStatus, Name, Avatar, EmojiSmile, EmojiFrown} from 'components/Profile/FriendList/FriendList.styled'

export const FriendListItem = ({friend: {avatar, name, isOnline}}) => {
 return <Item>
 <SpanStatus>
 {/* isActive={(match, location) => {
    if (match) {
      return <EmojiSmile size={50} />
    } else {
      return <EmojiFrown size={50} />}}} */}
{isOnline === true ? <EmojiSmile size={50} /> : <EmojiFrown size={50} />}
  </SpanStatus>
 <Avatar
 src={avatar}
 alt="User avatar"
 width="48"
 />
 <Name>{name}</Name>
</Item>
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }))
}
