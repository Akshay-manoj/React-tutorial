import React, { useState } from 'react'
import { Button } from "react-bootstrap";

export default function FunctionalWelcomeComponent() {
  let [count, incrementCount] = useState(0)

  const increment = () => {
    incrementCount(count++)
  }

  return (
    <div className='function-component'>
      <h3>This is Functional Component.</h3>

      <h5>Count: {count}</h5>

      <Button variant='primary' onClick={increment}>Click to increase count</Button>
      {'   '}
      <Button variant='danger' onClick={reset => incrementCount(0)}>Reset</Button>
    </div>
  )
}
