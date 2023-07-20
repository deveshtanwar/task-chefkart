import './navbar.css';

const Navbar = (prop) =>{
    return(
        <div className = "navbar">
            <i className="fa-solid fa-arrow-left"></i>
            <p>{prop.title}</p>
        </div>
    );
}
export default Navbar;