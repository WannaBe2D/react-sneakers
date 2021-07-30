import './index.scss';
import Header from './components/Header';
import axios from 'axios';
import React from 'react';
import Drawer from './components/Drawer';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {

  const[items, setItems] = React.useState([]);

  const[cartOpened, setCartOpened] = React.useState(false);

  const[searchValue, setSearchValue] = React.useState('');

  const[cartItems, setCartItems] = React.useState([]);
  const[favoriteItems, setFavorite] = React.useState([]);
  
  React.useEffect(() => {
    axios.get("https://6103ff2e3356ea001748f5f5.mockapi.io/api/sneakers")
    .then((response) => {
      setItems(response.data);
    })

    axios.get("https://6103ff2e3356ea001748f5f5.mockapi.io/api/cart")
    .then((response) => {
      setCartItems(response.data);
    })

    axios.get("https://6103ff2e3356ea001748f5f5.mockapi.io/api/favorites")
    .then((response) => {
      setFavorite(response.data);
    })
  }, []);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  }

  const addToFovarite = async (item) => {
    try {
      if(favoriteItems.find(e => e.id === item.id)){
        axios.delete(`https://6103ff2e3356ea001748f5f5.mockapi.io/api/favorites/${item.id}`)
        setFavorite(prev => prev.filter((e) => e.id !== item.id))
      }else{
        const { data } = await axios.post("https://6103ff2e3356ea001748f5f5.mockapi.io/api/favorites", item)
        setFavorite(prev => [...prev, data])
      }
    } catch (error){
      alert('Не удалось добавить в фавориты');
    }
  }

  const addToCart = (item) => {
    axios.post("https://6103ff2e3356ea001748f5f5.mockapi.io/api/cart",item)
    setCartItems(prev => [...prev, item])
  }

  const removeItemCart = (id) => {
    axios.delete(`https://6103ff2e3356ea001748f5f5.mockapi.io/api/cart/${id}`)
    setCartItems(prev => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onRemove={removeItemCart} items={cartItems} onClose={() => setCartOpened(false)}  />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/favorites">
        <Favorites 
          items={favoriteItems}
          addToFovarite={addToFovarite}
          addToCart={addToCart} 
        />
      </Route>

      <Route path="/" exact>
        <Home
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeValue={onChangeValue}
          items={items}
          addToFovarite={addToFovarite}
          addToCart={addToCart}
         />
      </Route>
      
    </div>
  );
}

export default App;
