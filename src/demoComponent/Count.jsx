import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const [line, setLine] = useState('-')
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    function getmsg(){
        return line
    }
    function printlines(count)
    {
        for (let i = 0; i < count; i++) {
            return getmsg()
        }
    }
    return (
        <>
        <div className='flex flex-col items-center'>
       <div className='flex'>
       <Button onClick={()=>{dec()}}>-</Button>
        
        -------------
        
        <Button onClick={()=>{inc()}}>+</Button>
       </div>
        <br/>
        <h1 className='text-xl font-bold mx-auto '>{count}</h1>
        </div>
    </>
  )
}

export default Count