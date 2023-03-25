import React from 'react'
import './Button.css'

const Button = ( {text, onHandleClick}) => {
  return (
    <button
    className='button'
    onClick={ onHandleClick }>
        {text}

    </button>
  )
}

export  {Button}