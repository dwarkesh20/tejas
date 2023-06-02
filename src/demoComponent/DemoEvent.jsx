import React from 'react'

const DemoEvent = () => {
    function message(){
        console.log(111)
    }
  return (
    <>
        DemoEvent <br />
        <button onClick={message}>Click</button>
    </>
  )
}

export default DemoEvent