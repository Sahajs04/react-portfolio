import './Navbar.css';


export const Navbar = () => {
    return <nav className="NavigationBar">
        <a href="#home" className="HomeButton">Home</a>

        <div>
        <ul className="ElementsList">
            
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#projects">Contact</a>
                </li>
        </ul>

        </div>

    </nav>
}
