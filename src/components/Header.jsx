import { NavLink } from 'react-router-dom';
import Logo from '../images/hero-bg.jpg'
import Slider from './Slider';
import { useLocation } from 'react-router-dom';
function Header(){
  const location = useLocation();
  console.log(location.pathname);
  let background = false;
if(location.pathname === "/"){
  background = true;
}

const colorBackground = {
  backgroundColor: 'black',
};
return(
<>
 
    {background && <div className="bg-box">
      <img src={Logo} alt="" />
    </div>}
 <header className="header_section" style={colorBackground}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <NavLink className="navbar-brand" to="/">
            <span>
              Feane
            </span>
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/menu">Menu</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">Book Table</a>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
    </header>
   
   
</>)
}

export default Header;