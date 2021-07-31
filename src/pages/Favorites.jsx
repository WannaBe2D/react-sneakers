import Card from '../components/Card';
import React from 'react'
import AppContext from '../context';

function Favorites({addToFovarite, addToCart}) {
  const { favoriteItems } = React.useContext(AppContext);
    return (
        <div className="content">
            <div className="content-navigation">
                <h2>Мои закладки</h2>
            </div>
            <div className="items">
                {favoriteItems
                    .map((element) => (
                    <Card 
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        price={element.price}
                        imgUrl={element.image}
                        onAddFavorite={addToFovarite}
                        onAddCart={addToCart}
                        favorited={true}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;