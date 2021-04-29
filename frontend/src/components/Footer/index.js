import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer(){


  return (
    <nav>
      <div className='footer-container'>
        <div className='gitHub-div'>
          <i class="fab fa-github"></i>
          <a className='gitHub-text' target='_blank' href="https://github.com/Jc-008">GitHub</a>
        </div>
        <a className="wiki-text" target='_blank' href="https://github.com/Jc-008/electric_nights/wiki">EN Wiki</a>
      </div>
    </nav>
  );
}


export default Footer;


{/* <a className="footer" target='_blank' href="https://github.com/Jc-008" style={{ marginLeft: '20px' }}>Github</a> */}
{/* <a className="footer" target='_blank' href="https://github.com/Jc-008/electric_nights/wiki" style={{ marginLeft: '20px' }}>EN Wiki</a> */}
