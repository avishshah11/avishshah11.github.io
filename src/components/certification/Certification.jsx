import React from 'react'
import './certification.css'
import Vitol from '../../assets/Vitol.pdf'

const Certification = () => {
    return (
        <section id='certification'>
            <h5> What I've learned</h5>
            <h2> Certification</h2>
            <div className='container certification__container'>
                <div className='certification_title'>
                    <a href="https://www.coursera.org/account/accomplishments/verify/CK6TVR2RXEWR">
                    <button className='button'>Certificate</button>
                    </a>
                    <h3>Engineering Project Management</h3>
                    <div className='certification_content'>
                    <h4>Coursera</h4>
                    <h5>Issued November 2021</h5>
                    </div>
                </div>
                <div className='certification_title'>
                    <a href="https://smartinternz.com/internships/externship_saas_certificates/0d9756dc528560b61c85bfefba233aab">
                    <button className='button'>Certificate</button>
                    </a>
                    <h3>Artificial Intelligence powered by IBM</h3>
                    <div className='certification_content'>
                    <h4>SmartInternz</h4>
                    <h5>Issued June 2022</h5>
                    </div>
                </div>
                <div className='certification_title'>
                    <a href={Vitol}>
                    <button className='button'>Certificate</button>
                    </a>
                    <h3>Legal Aspects of Business</h3>
                    <div className='certification_content'>
                    <h4>VITOL Institute</h4>
                    <h5>Issued June 2020</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certification