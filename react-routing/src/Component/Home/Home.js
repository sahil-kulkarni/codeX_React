
import './Home.css';
import {Link} from "react-router-dom";

function Home(){

    return(

        <div id="Home">
            
            {/* <nav>
                <ul>
                <li><img className='logo' src={`${homelogo}`} /></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Testimonial</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav> */}

            <main>
                <div className="Home-text">
                    <h1> Dream Cake Shop</h1>
                    <p>Baking with Heart</p>
                </div>

                <div className="buttons">
                <Link to='/Contact'> <button>Find Out</button></Link>
                <Link to='/Testimonials'> <button>Read</button></Link>
                    
                    
                </div>
            </main>

        </div>



    );
}
export default Home;