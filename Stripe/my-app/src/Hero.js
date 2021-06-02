import React from 'react';
import { useGlobalContext} from './context'
import PhnImg from './images/hero.svg'

const Hero = () => {
    const {closeSubmenu}=useGlobalContext()
    return (
        <section className="hero" onMouseOver={closeSubmenu} >
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payement InfraStructure for the Internet</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis dolorum sunt quos impedit aspernatur, corporis aliquam, distinctio quasi delectus similique, exercitationem velit nostrum. Enim a facilis similique. Commodi, numquam?</p>
                   <button className="btn" > Start Now</button>
                </article>
                <article className="hero-images">
                    <img src={PhnImg} className="phone-img" alt=""/>
                </article>
            </div>
        </section>
    )
}



export default Hero;