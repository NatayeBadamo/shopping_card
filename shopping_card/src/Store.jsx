import { useState } from 'react';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Store() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (item) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, item]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return total + priceNumber;
    }, 0).toLocaleString(); // Format the number
  };


  const products = [
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/bike_one.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/bike_two.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/bike_three.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/four.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/five.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/six.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/seven.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/eight.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/nine.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/ten.png' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/eleven.jpg' },
    { name: 'Ghost Rider M-36', price: '50,000$', image: './bikeImages/twelve.jpg' },
  ];

  return (
    <>
      <NavBar cartCount={cartCount} toggleCartVisibility={toggleCartVisibility} />
      <h1 className=' text-center text-lg font font-bold '>SHOPPING FOR REAL EXPERIENCE</h1>
      <h1 className='text-center text-xl font font-light'>Ghost-Riders</h1>

      <div className={`flex items-center justify-center ${isCartVisible ? 'blur-sm' : ''}`}>
        <div className='mt-5 grid lg:grid-cols-3 gap-10'>
          {products.map((product, index) => (
            <div key={index} className='card hover:shadow-2xl transition ease-in-out duration-200'>
              <img src={product.image} alt={product.name} className='w-full h-32 sm:h-48 object-cover'/>
              <div className="m-4">
                <span className="font-bold">{product.name}</span>
                <span className="block text-gray-500 text-sm mb-1">{product.price}</span>
                <div className="flex items-center space-x-2">
                  <button className='bg-sky-500 text-white w-60 rounded-lg hover:bg-sky-600' onClick={() => handleAddToCart(product)}>Add to the cart</button>
                  <button className="relative flex h-12 w-20 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-10 w-14 bg-sky-500 flex items-center justify-center text-white text-sm font-semibold">
                      <Link to="/store" className="text-gray-100">Buy</Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <div className={`w-72 fixed right-0 top-0 h-full bg-white shadow-lg p-4 transition-transform duration-300 ${isCartVisible ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
        <h2 className='text-xl font-bold mb-4'>Your Cart</h2>
        {cartItems.length > 0 ? (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className='mt-4'>
              <h3 className='font-bold text-lg'>Total: {calculateTotalPrice()}$</h3>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button
          className='bg-red-600 text-white w-full rounded-lg mt-4 hover:bg-red-700'
          onClick={toggleCartVisibility}
        >
          Close Cart
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Store;
