import React from 'react';
import AddUser from './Components/Users/AddUsers';
import UserList from './Components/Users/UsersList';

function App() {
  return (
    <div>
      <AddUser></AddUser>
      <UserList users={[]}></UserList>
    </div>
  );
}

export default App;
