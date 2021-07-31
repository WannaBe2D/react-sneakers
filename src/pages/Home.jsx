import Card from '../components/Card';
import React from 'react'

function Home({
    searchValue,
    onChangeValue,
    setSearchValue,
    items,
    addToCart,
    isLoading,
}) {

      const returnItem = () => {
        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
      return (
        isLoading ? [...Array(8)].map((element, index) => (
          <Card
            key={index} 
            isLoading={isLoading}
          />))
        :
         filteredItems.map((element) => (
          <Card 
            key={element.id}
            id={element.id}
            title={element.title}
            price={element.price}
            imgUrl={element.image}
            onAddCart={addToCart}
            isLoading={isLoading}
          />))
      
      );
    }

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
            <div className="items">{returnItem()}</div>
        </div>
    );
}

export default Home;