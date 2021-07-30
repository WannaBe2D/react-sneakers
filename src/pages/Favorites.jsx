import Card from '../components/Card';

function Favorites({
   items,
   addToFovarite,
   addToCart
}) {
    return (
        <div className="content">
            <div className="content-navigation">
                <h2>Мои закладки</h2>
            </div>
            <div className="items">
                {items
                    .map((element) => (
                    <Card 
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        price={element.price}
                        imgUrl={element.imgUrl}
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