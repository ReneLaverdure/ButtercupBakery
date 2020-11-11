import React from 'react'

import StackDonuts from '../../images/stacked-donuts.jpg'; 
import ChocolateShavingCupcake from '../../images/chocolate-shaving-cupcake.jpg';
import ChocolateCupcake from '../../images/chocolate-cupcakes.jpg';
import PancakeTower from '../../images/pancake-tower.jpg';
import BlueBerry from '../../images/blueberry-.jpg';
import Macroos from '../../images/macroos.jpg';
import ChocolateTopCake from '../../images/chocolate-top-cakes.jpg';
import ShortCakes from '../../images/short-cakes.jpg';

export default function Gallery() {
    return (
        <div className="Gallery HomePageGallery">
            <figure className="Gallery__Item--1">
            <img src={StackDonuts} alt="Multi Tier cake" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--2">
                <img src={ChocolateShavingCupcake} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--3">
                <img src={ChocolateCupcake} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--4">
                <img src={PancakeTower} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--5">
                <img src={BlueBerry} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--6">
                <img src={Macroos} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--7">
                <img src={ChocolateTopCake} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
            <figure className="Gallery__Item--8">
                <img src={ShortCakes} alt="Stacked Donuts" className="Gallery__img" />
            </figure>
        </div>
    )
}
