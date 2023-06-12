import React from 'react';
import footerLogo from '../../../src/assets/sport.avif'

const Footer = () => {
    return (
        <footer >
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='rounded-full' style={{ height: '50px' }} src={footerLogo} alt="" />
                    <p>Address: 123, Hello Summer Way,
                        <br />
                        Palmyra, VA 22233
                        <br />
                        Postal mail: P.O.Box 123, Palmyra, VA 22333</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Basketbal</a>
                    <a className="link link-hover">Cricket</a>
                    <a className="link link-hover">Volleyball</a>
                    <a className="link link-hover">Badminton</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Contacts</span>
                    <a className="link link-hover">Office hours: 1:20am – 5:00pm</a>
                    <a className="link link-hover">Telephone: (123) 556-58-80</a>
                    <a className="link link-hover">Email: rafio@example.com</a>
                </div>

            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by summer camp</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;