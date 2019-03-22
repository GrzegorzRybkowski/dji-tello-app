import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from './components'

const Root = () => (
  <div>
    hello modify
    <Button />
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'))
