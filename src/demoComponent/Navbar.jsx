import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Class from "./Class";
import Count from "./Count";
import { Home } from "./Home";
import Array from "./Array";
import UserFormikform from "./UserFormikform";

import AxiosDemo from "./AxiosDemo";
import SpringData from "./springdata";
   
  export default function Example() {
    const data = [
      {
        label: "home",
        value: "home",
        desc: <Home/>,
      },
      {
        label: "class",
        value: "class",
        desc: <Class/>,
      },
   
      {
        label: "count",
        value: "count",
        desc: <Count/>,
      },
   
      {
        label: "array",
        value: "array",
        desc: <Array/>,
      },
   
      {
        label: "Formik",
        value: "formik",
        desc: <UserFormikform/>,
      },
   
      {
        label: "Axios",
        value: "axios",
        desc: <AxiosDemo/>,
      },
   
      {
        label: "User",
        value: "user",
        desc: <SpringData/>,
      },
   
      
    ];
   
    return (
      <Tabs id="custom-animation" value="html" >
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        
        <TabsBody 
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className='mx-auto flex flex-col items-center'>
                    {desc}
                </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }