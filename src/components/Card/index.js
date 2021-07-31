import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';

function Card({ id, title, price, imgUrl, onAddFavorite, onAddCart, isLoading }) {
    const {isItemAdded, addToFovarite, isItemFavorited} = React.useContext(AppContext);

    const onClickFavorite = () => {
        addToFovarite(id)
        
    }

    const onClickPlus = () => {
        onAddCart(id)
    }

    return (
        <div className={styles.card}>
            {isLoading ? 
              <ContentLoader 
                speed={2}
                width={210}
                height={237}
                viewBox="0 0 210 260"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="36" rx="10" ry="10" width="150" height="91" /> 
                <rect x="0" y="143" rx="3" ry="3" width="150" height="15" /> 
                <rect x="0" y="162" rx="3" ry="3" width="93" height="15" /> 
                <rect x="0" y="199" rx="8" ry="8" width="80" height="24" /> 
                <rect x="118" y="191" rx="8" ry="8" width="32" height="32" />
              </ContentLoader>
              : 
              <>
              <div onClick={onClickFavorite} className={styles.favorite}>
                {isItemFavorited(id) ? <img src="/imgAssets/inFavorite.png" alt="product" /> : <img src="/imgAssets/favoriteItem.png" alt="product" />}
            </div>
            <img width="100%" height={135} src={imgUrl} alt="item" />
            <h5>{title}</h5>
            <div className={styles.description}>
                <div className={styles.price}>
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <div onClick={onClickPlus}>
                    {isItemAdded(id) ? <img className={styles.add} src="/imgAssets/inCart.svg" alt="add" /> : <img className={styles.add} src="/imgAssets/add.svg" alt="add" />}
                </div>
            </div>
              </>
            }
        </div>
    )
}

export default Card;