import './css/navbar.css';

const Navbar = () => {
    return(
        <div className='navbar'>
            <img src='./mylogo.png' className='nav--logo' alt='logo'/>
            <div className='nav--name'>Shopping List</div>
            <div className='nav--logandsign'>
                <button className='nav--login'>Log In</button>
                <button className='nav--signup'>Sign Up</button>
            </div>
        </div>
    )
}


export default Navbar;