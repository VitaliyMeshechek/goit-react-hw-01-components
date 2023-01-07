import PropTypes from 'prop-types';
import {FriendListItem} from 'components/Profile/FriendList/FriendListItem';
import {List} from 'components/Profile/FriendList/FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <List>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend}/>
    ))}
    </List>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
}
