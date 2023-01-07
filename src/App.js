import {Profile} from 'components/Profile/Profile/Profile';
import {Statistics} from 'components/Profile/Statistics/Statistics';
import {StatisticCard} from 'components/Profile/Statistics/StatisticCard';
import {FriendList} from 'components/Profile/FriendList/FriendList';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transaction.json';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
/>
    <div>
      <Statistics
      title="Upload stats" 
      stats={data}>
      </Statistics>
      </div> 
      <div>
      <StatisticCard stats={data} />
      </div>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
