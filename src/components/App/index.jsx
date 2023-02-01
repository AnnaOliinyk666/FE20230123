import User from '../User';
import s from './style.module.css'
import { useState } from "react";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const resp = await fetch (`https://jsonplaceholder.typicode.com/users`);
      const data = await resp.json();
      setUsers(data);
    })()
  },[])
  const [users, setUsers] = useState([]);

  const deleteUser = (delId) => {
    const newArr = users.filter(({id}) => id !== delId);
    setUsers(newArr);
};

  return (
    <div className={s.container}>
      {
        users.map((user) => <User key = {user.id} {...user}
        deleteUser = {deleteUser} />)
      }
    </div>
  );
}

export default App;
