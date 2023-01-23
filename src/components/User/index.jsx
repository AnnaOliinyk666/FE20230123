import React from 'react'
import s from './style.module.css'

export default function User({id,name,email,username,deleteUser}) {
  return (
    <div className={s.card}>
        <p>NAME: {name}</p>
        <p>EMAIL: {email}</p>
        <p>USERNAME: {username}</p>
        <button onClick={() => deleteUser(id)}>DELLETE</button>
    </div>
  )
}
