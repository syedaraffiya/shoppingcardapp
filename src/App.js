import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const PAGE_PRODUCTS ="products";
const PAGE_CART = "cart"

function App() {
  const[ cart,setCart]= useState([])
 const [ page,setPage]=useState(PAGE_PRODUCTS)

  const [products]= useState([
    {
      name: "APPLE",
      cost : " Rs :100/.",
      des: "('  Fresh Apple Rs. 120 per kg')",
      image : "https://media.istockphoto.com/photos/jonagold-apples-in-a-basket-picture-id137349326?k=20&m=137349326&s=170667a&w=0&h=iIf4Hvdmu7Hr8NyMXtQC197U0J-vAWDIiFNCyCubDQw="
    },
    {
      name: "BANANA",
      cost : "Rs :150/.",
      des: "(' Fresh Banana Rs. 120 per dorzen')",
      image : "https://www.somewhatsimple.com/wp-content/uploads/2014/07/How-to-make-bananas-last-longer.png"
    },
    {
      name: "BLANKET",
      cost : "Rs :1500/..",
      des: "('Pure Woolen Blanket')",
     image : "https://4.imimg.com/data4/WY/AL/MY-22245997/double-ply-mink-blankets-500x500.jpg"
    },

    {
      name: "SANDEL",
      cost : "Rs :1200/.",
      des: "('Flat Stylish Sandel')",
     image : "https://i.pinimg.com/originals/34/ed/c7/34edc72e722d8f0d34d36c8bbd601175.png"
    },
    {
      name: "TOY CAR",
      cost : "Rs :1800/.",
      des: "(' Remote Control Car for Childern')",
     image : "https://i.ebayimg.com/images/g/700AAOSw7k9dncmz/s-l300.jpg"
    },
    {
      name: "TOMATOES",
      cost : "Rs :120/.",
      des: "(' Fresh and Healthy Tomatos Rs. 120 per kg ')",
     image : "https://thumbs.dreamstime.com/b/fresh-red-tomatoes-wicker-basket-white-background-32792404.jpg"
    },
    {
      name: "CUSHION",
      cost : "Rs :500/.",
      des: "('Soft Cushion')",
     image : "https://i.pinimg.com/originals/44/e9/46/44e946ce6047c7f91fd608743aab7691.png"
    },

    {
      name: "MEN SHOES",
      cost : "Rs :2000/.",
      des: "('Men branded shoes')",
     image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRffkuTGT8YTwsfITnX9KOLayu1CUax2-SuWlo6kxu4moqMYgohQ08ceT1qlKNbJwxWU&usqp=CAU"
    },

    {
      name: "LADIES BAG",
      cost : "Rs :2500/.",
      des: "('Bag for Ladies only Rs:2500/. each')",
     image : "https://5.imimg.com/data5/EZ/OQ/OC/SELLER-67282481/ladies-fashion-bags-500x500.png"
    },
    
    {
      name: "PERFUME",
      cost : "Rs :4000/.",
      des: "('Branded Perfume for ladies only in Rs: 4000')",
     image : "http://cdn.shopify.com/s/files/1/0500/8539/6644/collections/WeChat_Image_20201019162014_1200x1200.png?v=1603106782"
    }
  ])

  const addToCart =(product) => {
   
    setCart([...cart,{...product}]);
  }
 const removeFromCart = (productToRemove) =>{
   setCart(
     cart.filter((product)=> product !== productToRemove)
   );
 };

  const navigateTo = (nextPage) =>{
    setPage(nextPage);
  };

  const renderProducts = () =>(
  <>
      <h1>PRODUCTS</h1>
      <div  className="products">
      {products.map((product, idx) => (

        <div  className="prod" key={idx}>
        <h1>{product.name}</h1>
        <h3>{product.cost}</h3>
        <h5>{product.des}</h5>
        <img src={product.image} alt={product.image}/>
        <button onClick={()=> addToCart(product)}>Add To Cart</button>
      </div>
      ))}

</div>

</>
)
const renderCart= () =>(
<>
    <h1>CART</h1>
    <div  className="products">
    {cart.map((product, idx) => (

      <div  className="prod" key={idx}>
      <h1>{product.name}</h1>
      <h3>{product.cost}</h3>
      <img src={product.image} alt={product.image}/>
      <button onClick={()=> removeFromCart(product)}>Remove</button>
    </div>
    ))}

</div>

</>
)
  return (
    <div className="App">
      <header>
      <button onClick={()=> navigateTo(PAGE_CART)}> Go To Cart ({cart.length}) </button>

      <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>

      {page === PAGE_PRODUCTS &&  renderProducts()}
      {page === PAGE_CART &&  renderCart()}
      
     
</div>
  )
  }
export default App;
