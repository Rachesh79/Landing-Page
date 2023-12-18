import './Nav.css'

const Nav = () =>{
    return <div className="container">
        <div className="logo">
            <img src="Logo.jpg" alt="" />
        </div>
        <div className="menu">
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Contact Us</li></a>
                <a href="#"><li>About Us</li></a>
            </ul>
        </div>
        <div className='btn'>
            <button className="login">LogIn</button>
        </div>
    </div>
}

export default Nav