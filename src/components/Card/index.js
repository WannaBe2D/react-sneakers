import styles from './Card.module.scss';
import React from 'react';

function Card({ id, title, price, imgUrl, onAddFavorite, onAddCart, favorited=false }) {
    const[onFavorite, setFavorite] = React.useState(favorited);
    const[onCart, setCart] = React.useState(false);

    const onClickFavorite = () => {
        onAddFavorite({id, title, price, imgUrl})
        setFavorite(!onFavorite);
    }

    const onClickPlus = () => {
        onAddCart({id, title, price, imgUrl})
        setCart(!onCart);
    }

    return (
        <div className={styles.card}>
            <div onClick={onClickFavorite} className={styles.favorite}>
                {onFavorite ? <img src="/imgAssets/inFavorite.png" /> : <img src="/imgAssets/favoriteItem.png" />}
            </div>
            <img width="100%" height={135} src={imgUrl} alt="item" />
            <h5>{title}</h5>
            <div className={styles.description}>
                <div className={styles.price}>
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <div onClick={onClickPlus}>
                    {onCart ? <img className={styles.add} src="/imgAssets/inCart.svg" alt="add" /> : <img className={styles.add} src="/imgAssets/add.svg" alt="add" />}
                </div>
            </div>
        </div>
    )
}

export default Card;