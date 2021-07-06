import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {


  return (
    <nav>
      <div className='footer-container'>
        <div className='footer-left-container'>
          <a className='gitHub-text' target='_blank' href="https://github.com/Jc-008">GitHub</a>
        </div>
        <div className='footer-right-container'>
          <a className="wiki-text" target='_blank'>
            © Electric Nights
          </a>
          <a className="wiki-text" target='_blank' href="https://github.com/Jc-008/electric_nights/wiki">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}


export default Footer;


{/* <a className="footer" target='_blank' href="https://github.com/Jc-008" style={{ marginLeft: '20px' }}>Github</a> */ }
{/* <a className="footer" target='_blank' href="https://github.com/Jc-008/electric_nights/wiki" style={{ marginLeft: '20px' }}>EN Wiki</a> */ }
