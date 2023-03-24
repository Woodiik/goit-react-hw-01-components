import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import items from 'transactions.json'
import { Container } from './App.styled.jsx';
import { Profile } from '../Profile/Profile.jsx'
import { Statistics } from '../Statistics/Statistics.jsx';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import { TransactionHistory } from 'TransactionHistory/TransactionHistory.jsx';



export const App = () => {
  return <Container>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={items}/>
  </Container>
};
