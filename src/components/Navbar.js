import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate,setAuthenticate}) => {
    const navigate = useNavigate()
    const menuList = ["Women","Divided","Men","Baby","Kids","Home","Sale","Sustainability"]
    const goToLogin = () =>{
        if(authenticate){
            setAuthenticate(false)
        }else{
            navigate("/login")
        }
    }
    const search = (event) =>{
        if (event.key == "Enter"){
            let keyword = event.target.value 
            navigate(`/?q=${keyword}`)
        }
    }
    
  return (
    <div>
        <div>
            <div className = "login-button" onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} className = "person"/>
                <div>{authenticate ? "Logout":"Login"}</div>
            </div>
        </div >

        <div className='nav-Section'>
            <img  width = {100} src = "https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png"/>
        </div>

        <div className='menu-area'>
            <ul className="menu-list">
            {menuList.map((menu, index) => (
                <li key = {index}>
                    <a href="#" key={index}>
                        {menu}
                    </a>
                </li>
            ))}
            </ul>

            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" placeholder="Search " onKeyPress={(event)=>search(event)} />
            </div>
        </div>
    </div>
  )
}

export default Navbar