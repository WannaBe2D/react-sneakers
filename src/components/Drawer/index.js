import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items=[] }) {
    return (
      <div className={styles.overlay}>
        {items.length > 0 ? <div className={styles.drawer}>
          <div className={styles.title}>
              <h3>Корзина</h3>
              <img onClick={onClose} src="/imgAssets/remove.svg" alt="remove" />
            </div>
            <div className={styles.cartItems}>
              {items.map((element) => (
                <div className={styles.item}>
                  <img className={styles.itemImg} width={70} height={70} src={element.imgUrl} alt="item" />
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
              <button className="greenButton">Оформить заказ <img className="arrowRight" src="/imgAssets/arrow.svg" alt="arrow" /></button>
            </div>
        </div> 
        : 
        <div className={styles.emptyCart}>
          <div className={styles.info}>
            <img width={120} height={120} src="/imgAssets/box.jpg" alt="box" />
            <h4>Корзина пустая</h4>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton"><img className="arrowLeft" src="/imgAssets/arrowBack.svg" alt="arrow" /> Вернуться назад</button>
          </div>
        </div>}  
      </div>
    );
}

export default Drawer;