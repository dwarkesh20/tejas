import React, { createContext, useState } from 'react'
import App from '../App';
import { Button, Card,
  Input,
  Checkbox,
  Typography, } from "@material-tailwind/react";

export const cc = createContext()
export const Home = () => {


  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
  };
  return (
    <>
      <h1></h1>
{/*       
      <form action="" autoComplete='off' onSubmit={handleSubmit}>
        <Input type="text" name="name" />
        <Input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
        <Input type="submit" value="submit" />
        <Button>Button</Button>
      </form> */}

    <div>
    <Card color="transparent" shadow={false} >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input type="text" name="name" label='UserName' />
          <Input type="text" name="name" onChange={(e) => setName(e.target.value)} label='UserName'/>
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" type='submit' fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
        <cc.Provider value={name}>
      <div>{name}</div>
    </cc.Provider>

        </Typography>
      </form>
    </Card>
    </div>
    </>
  )
}

