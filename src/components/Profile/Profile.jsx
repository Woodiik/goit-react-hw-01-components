import PropTypes from "prop-types";
import { List, Img, Container, Description, ListEl } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return <Container >
  <Description >
    <Img
      src={avatar}
      alt="User avatar"
      
    />
    <p >{username}</p>
    <p >{tag}</p>
    <p >{location}</p>
  </Description>

  <List >
    <ListEl>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </ListEl>
    <ListEl>
      <span>Views</span>
      <span >{stats.views}</span>
    </ListEl>
    <ListEl>
      <span>Likes</span>
      <span >{stats.likes}</span>
    </ListEl>
  </List>
</Container>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}