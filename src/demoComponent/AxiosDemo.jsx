

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export default function AxiosDemo() {

  const [data, setdata] = useState([])     
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
          setdata(res.data);
      })
  }, [])
    
    

  return (
    <div>
      <h1> Axios demo page</h1>
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
          data.map((img)=> 
          <MenuItem className='w-1/8 m-0 hover:scale-125 '   >
              <img className='mx-auto' src={img.thumbnailUrl} alt="" />
          </MenuItem>)
        }
        </div>
      </MenuList>
      </Menu>
    </div>
  )
}