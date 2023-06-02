import React from 'react'
import { User } from './User'

const Userlist = () => {
    var users = [
        {id:1,name:'Dwarkesh'},
        {id:2,name:'Parth'},
        {id:3,name:'Brijesh'}
    ]
    const userlist = users.map(user=><User user={user}/>)
    return (<>{userlist}</>)
  
}
export default Userlist