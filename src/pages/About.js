import React from 'react'

//image imports
import HeroImage from '../images/short-cakes.jpg';
import CakeImg from '../images/cakes-display.jpg'

// components imports
import StyledHero from '../components/StyledHero/StyledHero';
import Fade from '../components/BackgroundFade/BackgroundFade'
import Banner from '../components/Banner/Banner';
import WrappedImage from '../components/WrappedImage/WrappedImage'
import SubTitle from '../components/SubTitle/SubTitle';


export default function About() {
  return (
    <div>
       <StyledHero img={HeroImage} parax="fixed" position="bottom">
          <Fade/>
          <Banner title='About Us' />
       </StyledHero>

       <WrappedImage img={CakeImg} mgAlt="A display of varying cakes">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad tempore et maxime eius consectetur. Illo, nulla maiores maxime temporibus quos quaerat rerum ea cumque voluptatum itaque quidem. 
          Asperiores delectus distinctio sit nihil tempore explicabo inventore illum nulla sint corrupti optio ea necessitatibus perspiciatis assumenda consequuntur velit nemo officia, 
          blanditiis pariatur accusamus odio doloribus laborum? Quam aliquam maiores cum fuga iste unde. Et consequatur eaque natus ut dolorum dolorem 
          voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad tempore et maxime eius consectetur. Illo, nulla maiores maxime temporibus quos quaerat rerum ea cumque voluptatum itaque quidem. 
          Asperiores delectus distinctio sit nihil tempore explicabo inventore illum nulla sint corrupti optio ea necessitatibus perspiciatis assumenda consequuntur velit nemo officia, 
          blanditiis pariatur accusamus odio doloribus laborum? Quam aliquam maiores cum fuga iste unde. Et consequatur eaque natus ut dolorum dolorem 
          voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
          </p>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad tempore et maxime eius consectetur. Illo, nulla maiores maxime temporibus quos quaerat rerum ea cumque voluptatum itaque quidem. 
          Asperiores delectus distinctio sit nihil tempore explicabo inventore illum nulla sint corrupti optio ea necessitatibus perspiciatis assumenda consequuntur velit nemo officia, 
          blanditiis pariatur accusamus odio doloribus laborum? Quam aliquam maiores cum fuga iste unde. Et consequatur eaque natus ut dolorum dolorem 
          voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.eaque natus ut dolorum dolorem 
          voluptas quidem omnis praesentium, officiis, voluptatibus porro assumenda eius! Exercitationem, dolore.
          </p>

      </WrappedImage>

      <SubTitle>
        <h2>our work speaks for itself</h2>
        <p>Enjoy our fresh baked products made with love and care with the best 
          colours and decorations to match your occasion</p>
      </SubTitle>  

    </div>
  )
}
