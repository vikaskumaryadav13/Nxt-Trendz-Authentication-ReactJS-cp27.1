// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />

        <button type="button" className="nav-mobile-btn">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>

      <div className="nav-content nav-bar-large-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">Cart</li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>

        <li className="nav-menu-item-mobile">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>

        <li className="nav-menu-item-mobile">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
