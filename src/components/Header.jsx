import React from 'react'
import '../css/Header.css'
import { ReactComponent as Search} from '../assets/svg/search.svg'

function Header() {
  return (
    <div className='header-container'>
      <header className='header-wrapper'>
        <img className='logo' src={require('../assets/logo.jpg')} alt=""/>
        <div className="search-wrapper">
          <input placeholder='Search' type="text" name="" id="" />
          <button className='search-btn'><Search className='search'/></button>
        </div>
        <div className="profile-buttons-wrapper">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Header