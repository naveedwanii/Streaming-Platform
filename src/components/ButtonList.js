import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Live', 'Cricket', 'Cooking']
const ButtonList = () => {
  return (
    <div className='flex'>
      {/* <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Live'/>
      <Button name='Cricket'/>
      <Button name='Cooking' /> */}
      {
        list.map((name) => (
          <Button name={name} />
       ))
      }
    </div>
  )
}

export default ButtonList