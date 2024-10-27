import { Link } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/Header.css"
function Header() {
    return (<>
     <div className="headerDiv">
     <ul>
            <li><Link to="/">
                <i class="bi bi-house-door-fill"></i>Home</Link></li>
            <li><Link to="/productdetail"><i class="bi bi-clipboard-data-fill"></i>Productdetail</Link></li>
            <li><Link to="/cart"><i class="bi bi-cart-check-fill"></i>cart</Link></li>
            <li><Link to="/checkout">
                <i class="bi bi-bag-check-fill"></i> Chekout</Link></li>

        </ul>
     </div>

    </>)
}
export default Header