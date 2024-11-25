import './Navbar.css';


export const Navbar = () => {
    return <nav className="NavigationBar">
        <a href="#About" className="HomeButton">Home</a>

        <div>
        <ul className="ElementsList">
            
                <li>
                <a href="#Projects">Projects</a>
                </li>
                <li>
                <a href="/Contact">Contact</a>
                </li>
        </ul>

        </div>

    </nav>
}
