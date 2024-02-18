
import './header.css';
import { Link } from 'react-router-dom';
import Eva_Logo from "../../images/{no.10003}.png";
import shkorina from '../../images/hena2.png';

const Header= () => {


    return (
      <>
        <div className="header">
          <div className="headerLeft">
            <Link to="/">
              <img className="header__icon" src={Eva_Logo} />
            </Link>
            <Link to="/movies/popular" style={{ textDecoration: "none" }}>
              <span>Popular</span>
            </Link>
            <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
              <span>Top Rated</span>
            </Link>
            <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
              <span>Upcoming</span>
            </Link>
          </div>
          <div className="headerright">
            <img className="yada" src={shkorina} />
            <span>ENJOY WITH ME</span>
          </div>
        </div>
      </>
    );
}


export default Header;
