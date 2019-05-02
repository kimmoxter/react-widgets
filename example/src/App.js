import React, { Component } from 'react'

import {Test, TextBox} from 'react-widgets'

export default class App extends Component {
  render () {
    return (
      <div>
        <Test title={"Probando un title"}></Test>
        <TextBox placeholder={"Probando placeholder"} ></TextBox>        
      </div>
    )
  }
}
