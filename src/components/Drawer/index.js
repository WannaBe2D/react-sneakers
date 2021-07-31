import styles from './Drawer.module.scss';
import React from 'react'
import AppContext from '../../context';
import Info from '../Info';

function Drawer({onRemove, items=[] }) {
    const[order, setOrder] = React.useState(false)
    const {onClose, createOrder} = React.useContext(AppContext);

    const deleteAllItemCart = () => {
      setOrder(true);
      createOrder(items.map((e) => e.id));
    }
    
    return (
      <div className={styles.overlay}>
        {items.length > 0 ? <div className={styles.drawer}>
          <div className={styles.title}>
              <h3>Корзина</h3>
              <img onClick={onClose} src="/imgAssets/remove.svg" alt="remove" />
            </div>
            <div className={styles.cartItems}>
              {items.map((element) => (
                <div key={element.id} className={styles.item}>
                  <img className={styles.itemImg} width={70} height={70} src={element.image} alt="item" />
                  <div>
                    <span>{element.title}</span>
                    <b>{element.price} руб.</b>
                  </div>
                <img onClick={() => onRemove(element.id)} src="/imgAssets/remove.svg" alt="remove" />
              </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li><span>Итого:</span><div></div><b>21 498 руб.</b></li>
                <li><span>Налог 5%:</span><div></div><b>1074 руб.</b></li>
              </ul>
              <button onClick={() => deleteAllItemCart()} className="greenButton">Оформить заказ <img className="arrowRight" src="/imgAssets/arrow.svg" alt="arrow" /></button>
            </div>
        </div> 
        :
        <div className={styles.emptyCart}>
          <div className={styles.info}>
              {
                order ?
                <Info
                title="Заказ оформлен!"
                description="Ваш заказ #18 скоро будет передан курьерской доставке"
                image="/imgAssets/order.png"
                /> 
                :
                <Info
                title="Корзина пустая"
                description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                image="/imgAssets/box.jpg"
                /> 
              }
            <button onClick={onClose} className="greenButton"><img className="arrowLeft" src="/imgAssets/arrowBack.svg" alt="arrow" /> Вернуться назад</button>
          </div>
        </div>}  
      </div>
    );
}

export default Drawer;