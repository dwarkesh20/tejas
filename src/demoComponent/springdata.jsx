

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export default function SpringData() {

  const [data, setdata] = useState([])     
  useEffect(() => {
    axios.get("http://localhost:8080/user").then(res => {
          setdata(res.data);
      })
  }, [])
    
    

  return (
    <div>
      <h1> Spring api Users</h1>
      {/* {JSON.stringify(data,null,2)} */}
      <Menu
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
      <MenuHandler>
        <Button variant="gradient">Open Menu</Button>
      </MenuHandler>
      <MenuList  className='flex'>
        <div className='w-full flex flex-wrap' >
        {
          data.map((user)=> 
          <MenuItem>
              {user.id} <br />
              {user.name} <br />
              {user.email} <br />

          </MenuItem>)
        }
        </div>
      </MenuList>
      </Menu>
    </div>
  )
}