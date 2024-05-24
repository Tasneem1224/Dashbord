import "./headerS.css";
import Logo from "./logoh.png";
export default Header;

function Header(){
    return( <>
     
            <div className="header">
                <nav>
                <img src={Logo} className="logoh" alt="logo"/>
                    
                    <ul>
                        <li>
                            <a href="Home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="About us">
                                About us
                            </a>
                        </li>
                        <li>
                            <a href="Contact us">
                                Contact us
                            </a>
                        </li>
                        <li>
                            <a href=" Help">
                                Help
                            </a>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                            <a href="Log in">
                               Sign in
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

 


        </>
    )
}

