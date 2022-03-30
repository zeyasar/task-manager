import React from 'react'
import Button from './Button'

const Header = ({showAddTask, toggleShow}) => {

    const handleClick = () =>{
        
    }


  return (
    <div className='header'>
        <h1>Task Manager</h1>
        <Button 
         color={showAddTask ? 'red' : 'purple'}
         text={showAddTask ? 'Close Add Task Bar':'Show Add Task Bar'}
         toggleShow={toggleShow}
        />
    </div>
  )
}

export default Header