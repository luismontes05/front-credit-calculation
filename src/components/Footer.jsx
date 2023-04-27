import React from 'react';
import logospace from "../assetss/img/logospace2.png"

function Footer() {
  return (
    <footer className="bg-dark fixed-bottom text-white p-1">
      <div className="container-fluid">
        <div className='text-center'>
            <img width="20" className="" src={logospace} />
            <span className="ps-2">Desarrollo realizado por space net | © 2023</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;