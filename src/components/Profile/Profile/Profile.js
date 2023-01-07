import PropTypes from 'prop-types';
import {ContainerWrapper, DescriptionUser, UserImg, Name, Login, Location, List, RedItem, BlueItem, GreenItem, Label, Quantity} from 'components/Profile/Profile/Profile.styled';


export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
  return <ContainerWrapper>
  <DescriptionUser>
    <UserImg
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Login>@{tag}</Login>
    <Location>{location}</Location>
  </DescriptionUser>
  <List>
    <RedItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </RedItem>
    <BlueItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </BlueItem>
    <GreenItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </GreenItem>
  </List>
</ContainerWrapper>
}

Profile.propTypes = {
  items: PropTypes.exact({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.number,
  })
}
