
import '../Component/Home/Home.css';
import homelogo from '../Assets/logo.png';
import {Link} from "react-router-dom";
function Navbar() {

        return (
            <div className='Navbar'>
                <ul>
                    <li>
                    <Link to='/'><img className='logo' src={`${homelogo}`} /></Link>
                    </li>
                    <li>
                        <Link to='/Features'>Features</Link>
                    </li>
                    <li>
                        <Link to='/Service'>Services</Link>
                    </li>
                    <li>
                        <Link to='/Testimonials'>Testimonials</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                
                </ul>
            </div>

        );
    
    
}

export default Navbar;
