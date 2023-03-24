//import PropTypes from "prop-types";
import { ListEl, MarkerOfline, MarkerOnline, Name } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return <ListEl>
    {isOnline ? <MarkerOnline></MarkerOnline> : <MarkerOfline></MarkerOfline>}
  <img src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
</ListEl>
}
//!!!!!======================= Тут потрібні PropTypes?
//FriendListItem.propTypes = {
//  avatar: PropTypes.string.isRequired,
//  name: PropTypes.string.isRequired,
//  isOnline: PropTypes.bool.isRequired
//}