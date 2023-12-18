import './Hero.css'

const Hero = () =>{
    return <div className="main">
        <div className="main-content">
            <h1>DRIVE ELITE-DRIVE CLASS</h1>
            <p>
            Crafting Dreams on Wheels: Where Innovation Meets Driving Pleasure Perfectly.
            </p>
            <div className="hero-btn">
                <button className="explore">Explore</button>
                <button className="buy">BUY</button>
            </div>
        </div>
        <div className="main_image">
            <img src="body-img.jpg" alt="" />
        </div>
    </div>
}

export default Hero