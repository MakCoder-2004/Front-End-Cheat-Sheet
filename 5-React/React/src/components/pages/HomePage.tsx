import React, { Component } from 'react'

interface Iprops {}
interface Istate {
  counter: number;
  products: [];
}

export default class HomePage extends Component <Iprops, Istate> {
  constructor(props: Iprops) {
    super(props)
    
    this.state = {
      counter: 0,
      products: []
    }
  }


  render() {
    return (
      <>
        
      </>
    )
  }
}
