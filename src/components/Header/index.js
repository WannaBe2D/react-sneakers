import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();
    
    return (
        <header>
        <Link to="">
          <div className={styles.logo}>
            <img width={40} height={40} src="imgAssets/logo.png" alt="logo" />
            <div>
              <h2>REACT SNEAKERS</h2>
              <span>Магазин лучших кроссовок</span>
            </div>
          </div>
        </Link>
        <ul>
            <li onClick={props.onClickCart}><img src="imgAssets/Group.svg" alt="cart" /><span>{totalPrice} руб.</span></li>
            <li><Link className="d-flex" clas to="/favorites"><img src="imgAssets/favorite.svg" alt="favorite" /></Link></li>
            <li><Link className="d-flex" clas to="/orders"><img src="imgAssets/Union.svg" alt="account" /></Link></li>
        </ul>
      </header>
    );
}

export default Header;