import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'yhmane',
      email: 'yhmane@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'yunho',
      email: 'yunho@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'hwang',
      email: 'hwang@gmail.com',
      active: false,
    }
  ]);

  const nextId = useRef(4); // useState를 써도 되나 re-rendering을 할 필요가 없어서 변수 사용

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); // users.push(user)는 사용하지 말것.. 업데이트가 안됨
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id ? {...user, active: !user.active} : user
    ));
  }

  return (  
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;