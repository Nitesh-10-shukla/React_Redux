import React from 'react'
import '../../Style/common.css' 

const Header = (props) => {
  return (
    <div className='header'>
        <img src={props.image}/>
    </div>
  )
}

export default Header