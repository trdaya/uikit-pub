import React from 'react'

import {Button, ButtonTypes} from 'uikit'
// import 'uikit/dist/index.css' // TODO check giving error

const App = () => {
  return (
    <div style={{padding:'20px'}}>
      <Button text="default"/>
      <hr/>
      <Button text="primary" type={ButtonTypes.PRIMARY}/>
      <hr/>
      <Button text="secondary" type={ButtonTypes.SECONDARY}/>
    </div>
  )
}

export default App


