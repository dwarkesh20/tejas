import React from 'react'
import { User } from './User'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
const Array = () => {
    var arr = ['Dwarkesh','Parth','Brijesh']
    var user = [
        {id:1,name:'Dwarkesh'},
        {id:2,name:'Parth'},
        {id:3,name:'Brijesh'}
    ]
    
  return (
    <>
        {/* {arr} */}
        <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
      <MenuHandler>
        <Button variant="gradient">Open Menu</Button>
      </MenuHandler>
      <MenuList>
        {
          user.map((user)=> <MenuItem>{user.id} {user.name}</MenuItem>)
        }
      </MenuList>
      </Menu>
        
        {/* {arr.map((name,key)=><h2 key={key}> {key} - {name} </h2>)} */}
        
        
        <hr />

        {/* {user.map((user)=>(
            <>
            <h1 key={user.id}> {user.id} - {user.name} </h1>
            <h2 key={user.id}> {user.id} - {user.name} </h2>
            
            </>
        ))
        } */}
    </>
  )
}

export default Array