import User from '../User';
import s from './style.module.css'
import { useState } from "react";

function App() {
  let defArr = [];
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then((items) =>{
      items.forEach(element => {
        defArr.push(element)
      });
    } )
    .catch(() => {
      console.log("error")
    })
    const [users, setUsers] = useState(defArr);
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
