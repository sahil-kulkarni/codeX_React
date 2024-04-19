
import './Service.css';
import serviceimg1 from '../../Assets/cake1.jpg'
import serviceimg2 from '../../Assets/cake2.jpg'
import serviceimg3 from '../../Assets/cake3.jpg'
import serviceimg4 from '../../Assets/cake4.jpg'

function Service(params) {
    return (
        <>
            <section className='Service'>
                <div className='title-text'>
                    <p>SERVICES</p>
                    <h1>We Provide Better</h1>
                </div>
                <main className='Service_main'>
                    <div className='service_box'>
                        <div className='single-service'><img src={`${serviceimg1}`} /></div>
                        <div className='single-service'><img src={`${serviceimg2}`} /></div>
                        <div className='single-service'><img src={`${serviceimg3}`} /></div>
                        <div className='single-service'><img src={`${serviceimg4}`} /></div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Service;
