
import './Testimonial.css';
import user1 from '../../Assets/chiku.jpg';
import user2 from '../../Assets/smriti.jpg';
import user3 from '../../Assets/stark.jpg';
import Navbar from '../Navbar';
import Footer from '../Footer';
function Testimonial(params) {
    return (
        <>
            <section className='Testimonial'>

                <div className='title-text'>
                    <p>TESTIMONIAL</p>
                    <h1>What Client Say's</h1>
                </div>
                <main className='Testimonial_main'>
                    <div className='testimonial-row'>
                        <div className='testimonial-column'>
                            <div className='user'>
                                <img src={`${user1}`} />
                                <h1>VIRAT KOHLI</h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                                Certainly! Here's a concise review for a cafe:

                                "This cafe is a delightful spot for a cozy coffee break. The ambiance is charming, with a welcoming atmosphere that makes you feel right at home. The baristas are friendly and skilled, serving up delicious drinks with a smile. Don't miss their specialty lattes—they're simply divine. It's the perfect place to unwind and savor a moment of tranquility amidst the bustle of the day."
                            </p>
                        </div>
                        <div className='testimonial-column'>
                            <div className='user'>
                                <img src={`${user2}`} />
                                <h1>SMRITI MANDHANA </h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                            "This cafe is a gem! The atmosphere is cozy, the coffee is superb, and the staff are friendly. A perfect spot to relax and enjoy a delicious cup of joe."
                            </p>
                        </div>
                        <div className='testimonial-column'>
                            <div className='user'>
                                <img src={`${user3}`} />
                                <h1>TONY STARK </h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                            I ordered their signature latte, and let me tell you, it was perfection in a cup! Rich, velvety, and expertly crafted, it was evident that they take pride in every cup they serve. The pastry selection was equally impressive; I couldn't resist indulging in a flaky croissant that practically melted in my mouth.
                            </p>
                        </div>
                    </div>
                </main>

            </section>
        </>
    )
}

export default Testimonial;
