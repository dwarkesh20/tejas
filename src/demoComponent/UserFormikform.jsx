import React, { useState } from 'react'
import {
    Button, Card,
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useFormik } from 'formik';


const UserFormikform = () => {

    const [detail, setDeatail] = useState({});


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },

        onSubmit: values => {
            setDeatail(values);
        },

    });
    function printObject(object)
    {
      return  Object.entries(object).map(([key,value],i) => <option key={i} value={key}>{value}</option>)
    }
    return (

        <div>UserFormikform


            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    label='firstName'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <label htmlFor="lastName">Last Name</label>
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    label='lasttName'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />

                <label htmlFor="email">Email Address</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <Button type="submit" className='mt-2 mx-14'>Submit</Button>
            </form>

            {/* {JSON.stringify(detail, null, 2)} */}
            {printObject(detail)}
        </div>
    )
}

export default UserFormikform