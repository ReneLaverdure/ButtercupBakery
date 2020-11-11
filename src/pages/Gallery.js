import React from 'react';

// Import images
import TierCake from '../images/4-tier-cake.jpg';
import BlueBerry from '../images/blueberry-.jpg';
import CakeDisplay from '../images/cakes-display.jpg';
import ChocolateCupcake from '../images/chocolate-cupcakes.jpg';
import ChocolateShavingCupcake from '../images/chocolate-shaving-cupcake.jpg';
import ChocolateTopCake from '../images/chocolate-top-cakes.jpg';
import Macroos from '../images/macroos.jpg';
import PancakeTower from '../images/pancake-tower.jpg';
import SpongeCake from '../images/sponge-cake.jpg';
import ShortCakes from '../images/short-cakes.jpg';
import StackDonuts from '../images/stacked-donuts.jpg';
import StrawBerryCupcake from '../images/strawberry-cupcake.jpg';
import CakeSpread from '../images/cakespread.png';

import SubTitle from '../components/SubTitle/SubTitle';

export default function Gallery() {
    return (
        <div>
            <SubTitle color="var(--primary-color)" >
                <h1>Gallery</h1>
            </SubTitle>
                    
                <div className="Gallery">
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
                    <figure className="Gallery__Item--9">
                        <img src={Macroos} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--10">
                        <img src={CakeDisplay} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--11">
                        <img src={StrawBerryCupcake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--12">
                        <img src={TierCake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--13">
                        <img src={SpongeCake} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                    <figure className="Gallery__Item--14">
                        <img src={CakeSpread} alt="Stacked Donuts" className="Gallery__img" />
                    </figure>
                </div>

        </div>
    )
}
