import React from 'react'
import './Footer.css'
import { Button } from './components/Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
            </p>

            <p className="footer-subscription-text">
            You can unsubscribe at any time.
            </p>

            <div className="input-areas">
                <form>
                    <input 
                    className='footer-input'
                    name='email'
                    type="email"
                    placeholder='Your Email' />
                </form>
                <Button buttonStyle='btn--outline'>
                    Subscribe
                </Button>
            </div>
        </section>

        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>

        <section className='social-media'>
            <div className="social-media-wrap">
               
                <div className="footer-logo">
                    <Link to='/' className='social-logo' >
                        TRVL
                        <i class='fa fa-typo3' />
                    </Link>
                </div>

                <small class='website-rights'>TRVL © 2020</small>

                <div class='social-icons'>
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fa fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fa fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fa fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fa fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fa fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer