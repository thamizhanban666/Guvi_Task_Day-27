import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';
function App() {
    let cards = [
    {
      id :1,
      product: "Fancy Product",
      price: "$40.00 - $80.00",
      btn : "View Options"
    },
    {
      id :2,
      product: "Special Item",
      saleBadge: true,
      review: 5,
      mutedPrice : "$20.00",
      price: "$18.00",
      btn : "Add to cart"
    },
    {
      id :3,
      product: "Sale Item",
      saleBadge: true,
      mutedPrice : "$50.00",
      price: "$25.00",
      btn : "Add to cart"
    },
    {
      id :4,
      product: "Popular Item",
      review : 5,
      price: "$40.00",
      btn : "Add to cart"
    },
    {
      id :5,
      product: "Headphone",
      saleBadge: true,
      review: 4,
      mutedPrice : "$75.00",
      price: "$50.00",
      btn : "Add to cart"
    },
    {
      id :6,
      product: "Electronic gadgets",
      price: "$120.00 - $280.00",
      btn : "View Options"
    },
    {
      id :7,
      product: "Shirt",
      saleBadge: true,
      review: 3,
      mutedPrice : "$30.00",
      price: "$25.00",
      btn : "Add to cart"
    },
    {
      id: 8,
      product: "Redmi Note",
      review : 5,
      price: "$200.00",
      btn : "Add to cart"
    }
  ]

  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const btnAddToCart = (card) => {
    setCartItems([...cartItems, card]);
    setCount(count + 1);
  }
  const btnDeleteOnCart = (card) => {
    let index = cartItems.findIndex((e)=> e.id===card.id)
    cartItems.splice(index,1)
    setCartItems(cartItems);
    setCount(count - 1);
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <div className="dropdown">
              <button className="btn btn-outline-dark dropdown-toggle"   id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                <FontAwesomeIcon icon={faCartShopping} className="me-2"/>
                <span className="font-monospace">Cart</span>
                <span className="badge bg-dark text-white ms-1 rounded-pill">{ count }</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
               
                {
                  cartItems.map((card) => {
                    return <Cart btnClick={btnDeleteOnCart} card={card}></Cart>
                  }) 
                }
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
       
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

          {
            cards.map((card) => {
              return <Card btnClick={btnAddToCart} card={card} cartItems={cartItems}></Card>
           }) 
          }
          
          </div>
        </div>
      </section>
        {/* Footer */}
      <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
      </footer>
  </div>
  );
}

export default App;
