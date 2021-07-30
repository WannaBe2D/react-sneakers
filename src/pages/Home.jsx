import Card from '../components/Card';

function Home({
    searchValue,
    onChangeValue,
    setSearchValue,
    items,
    addToFovarite,
    addToCart,
}) {
    return (
        <div className="content">
            <div className="content-navigation">
            <h2>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h2>
            <div className="context-search">
                <img className="imgSearch" src="/imgAssets/search.svg" alt="search" />
                <input onChange={onChangeValue} value={searchValue} placeholder="Поиск..." maxLength={36} />
                {searchValue && <img onClick={() => setSearchValue('')} className="removeSeacrh cu-p" src="/imgAssets/remove.svg" alt="remove" />}
            </div>
            </div>
            <div className="items">
            {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((element) => (
                <Card 
                    key={element.id}
                    id={element.id}
                    itemId={element.itemId}
                    title={element.title}
                    price={element.price}
                    imgUrl={element.imgUrl}
                    onAddFavorite={addToFovarite}
                    onAddCart={addToCart}
                />
            ))}
            </div>
        </div>
    );
}

export default Home;