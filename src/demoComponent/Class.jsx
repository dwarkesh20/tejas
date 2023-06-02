import { Button } from '@material-tailwind/react';
import React, { Component } from 'react'

export class Class extends Component {
    message(){
      console.log(111)
    }
    getname(name) {
        return(
        <h1>Hello {name}</h1>
        );
    }

    render() {
    return (
      <>
      {this.getname('Dwarkesh')}
      <Button onClick={this.message}>Click</Button>
      
      </>
    )
  }
  
}

export default Class