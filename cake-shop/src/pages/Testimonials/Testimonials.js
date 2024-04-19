
import './Testimonial.css';
import user1 from '../../Assets/user1.jpg';
import user2 from '../../Assets/user2.jpg';
import user3 from '../../Assets/user3.jpg';
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
                                <h1>KEN NORMAN</h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae.
                            </p>
                        </div>
                        <div className='testimonial-column'>
                            <div className='user'>
                                <img src={`${user2}`} />
                                <h1>ALIS MARTIN </h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.
                            </p>
                        </div>
                        <div className='testimonial-column'>
                            <div className='user'>
                                <img src={`${user3}`} />
                                <h1>JACK SPARROW </h1>
                                <svg className='fas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#74C0FC" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae consequatur sit! Eaque voluptates explicabo, nulla ut eius dignissimos possimus libero labore quo, necessitatibus totam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam, ut, error blanditiis reprehenderit adipisci voluptatum, ducimus fuga quae.
                            </p>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Testimonial;
