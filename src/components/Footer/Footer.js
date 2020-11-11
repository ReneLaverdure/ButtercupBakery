import React from 'react'
import classes from './Footer.module.css';

import FacebookIcon from '../../images/icons/facebook.svg';
import TwitterIcon from '../../images/icons/twitter.svg';
import InstagramIcon from '../../images/icons/instagram.svg';
import PinterestIcon from '../../images/icons/pinterest.svg';

export default function Footer() {
  return (
    <>
    <footer>
      <div className={classes.Container}>

        <div className={classes.Sect}>
          <h3>About Us</h3>
          <p>
            Started off as a hobby out of pure passion to create beautiful cakes turned into what we are today. 
            We have created cakes for events ranging from 1st Birthdays to Weddings. 
            Find out more about us.
          </p>
        </div>

        <div className={classes.Sect}>
          <h3>Our Address</h3>
          <p>
            Unit 7, 5-7 Vesper Drive
            Narre Warren 3805
            Melbourne
          </p>
        </div>

        <div className={classes.Sect}>
          <h3>Contact Detail</h3>
          <p>
          Our Phone Number:98975583
          </p>
          <p>
          Our Email: info@buttercupbakery.com
          </p>
          <h3>Connect With Us</h3>
          <div className={classes.Icon}>
            <img src={FacebookIcon} alt="facebook icon"/>
            <img src={TwitterIcon} alt="twitter icon"/>
            <img src={InstagramIcon} alt="instagram icon"/>
            <img src={PinterestIcon} alt="pinterest icon"/>
          </div>

        </div>

      </div>
    </footer>
    <div className={classes.Bottom}>
      <h4>&copy; 2020 by Buttercup Bakery</h4>
    </div>
    </>
  )
}
