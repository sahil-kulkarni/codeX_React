
import './Contact.css';
import contactimg from '../../Assets/logo.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Contact(params) {
    return (
        <>
        <section className='Footer'>
            
                <div className='title-text'>
                    <p>CONTACT</p>
                    <h1>Visit shop Today</h1>
                </div>
                <main className='Footer_main'>
                    <img className='footer-img' src={`${contactimg}`} />
                    <div className='footer-row'>
                        <div className='footer-left'>
                            <h1>Opening Hours</h1>
                            <p className='footer-left-para'>
                                <span>
                                    <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#196d18" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                </span>
                                <span className='timing'>
                                    Monday to Friday - 9am to 9pm
                                </span>
                            </p>
                            <p className='footer-right-para'>
                                <span>
                                    <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#196d18" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                                </span>
                                <span className='timing'>
                                    saturday to sunday - 8am to 11pm
                                </span>
                            </p>
                        </div>
                        <div className='footer-right'>
                            <h1>Get In Touch</h1>
                            <p className='para2'>
                                <span>
                                    Queens, NewYork
                                </span>
                                <span>
                                    <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#165a1b" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                                </span>
                            </p>
                            <p className='para2'>
                                <span>
                                    sahilkulkarni069@gmail.com
                                </span>
                                <span>
                                    <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#124c0b" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" /></svg>
                                </span>
                            </p>
                            <p className='para2'>
                                <span>
                                    9096902542
                                </span>
                                <span>
                                    <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#113c18" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                </span>
                            </p>
                        </div>
                    </div>
                </main>
            
            </section>
        </>
    )
}

export default Contact;
