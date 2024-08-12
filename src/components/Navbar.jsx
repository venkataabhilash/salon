import React, { useState } from 'react'
import '../css/Navbar.css'

function Navbar() {
  const [menu,setmenu]= useState(false);
  const showmenu = () =>{
    setmenu(true);
  }
  const hidemenu = () =>{
    setmenu(false);
  }
  return (
    <div className='nav-container'>
      <nav className="nav-wrapper">
        <ul className='nav-links nav-links-left'>
          <li className='hide'><button>Home</button></li>
          <li className='hide'><button>About</button></li>
          <li className='hide'><button>Services</button></li>
          <li className='hide'><button>Gallery</button></li>
          <li className='hide'><button>Contact</button></li>
          <li onClick={showmenu} className='menu'><button><svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button></li>
        </ul>
        { menu && (
          <ul  className={`sidebar ${menu ? 'nav-wrapper' : 'hide'}`}>
          <li ><button>Home</button></li>
          <li ><button>About</button></li>
          <li ><button>Services</button></li>
          <li ><button>Gallery</button></li>
          <li ><button>Contact</button></li>
          <li onClick={hidemenu} className='menu'><button> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
        </ul>
        )}
       
        
        <ul  className='nav-links nav-links-right'>
          <li><button>For Business</button></li>
          <li><button>Post Ads</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar