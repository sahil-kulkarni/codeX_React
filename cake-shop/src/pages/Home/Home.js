
import './Home.css';
import homelogo from '../../Assets/logo.png';

function Home(){

    return(

        <div id="Home">
            <nav>
                <ul>
                <li><img className='logo' src={`${homelogo}`} /></li>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Testimonial</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>

            <main>
                <div className="Home-text">
                    <h1>Cake Shop</h1>
                    <p>Baking with Heart</p>
                </div>

                <div className="buttons">
                    <button>Find Out</button>
                    <button>Read</button>
                </div>
            </main>

        </div>



    );
}
export default Home;