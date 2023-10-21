import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-around' style={{ width: '100%', height: '400px', backgroundColor: '#F2F2F2' }}>
            <div className="footer d-flex justify-content-evenly w-100">
                <div className="wesite">
                    <h4>
                        <i className="fa-solid fa-cart-shopping me-2" style={{ color: 'black' }}></i>{' '}
                        E-cart
                    </h4>
                    <p style={{ color: '#303030' }}>Lorem ipsum dolor sit ametb <br /> consectetur adipisicing elit. <br /> Odio consectetur tempora maiores dolore.</p>
                </div>
                <div className="links d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>Home Page</Link>
                    <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'black' }}>History</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h4>Guides</h4>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>React</a>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>Bootstrap</a>
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>Node</a>
                </div>
            </div>
            <p style={{ color: 'black' }} className='text-end'>copy ® 2023 media player .Built with React.</p>
        </div>
  )
}

export default Footer