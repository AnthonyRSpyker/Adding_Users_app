import React from 'react';

import AddUser from './compononents/Users/AddUser/AddUser.component'
import UserList from './compononents/Users/UserList/UserList.component';

function App() {
  return (
    <div>
      
        <AddUser />
        <UserList users={[]}/>
      
    </div>
  );
}

export default App;
