/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Productcard from "./ProductCard";

function App() {
  
      const data = [
  {
    productImage:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70",
    model: "SAMSUNG Crystal Vision 4K iSmart",
    price: "Price: 86,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/r/t/-original-imagttgtnezgzrxn.jpeg?q=70",
    model: "Hisense Tornado 164 cm (65 inch) Ultra HD (4K) LED",
    oldPrice: "Price: 65,000/-",
    offerPrice: "Offer Price: 46,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/x/n/-original-imaguem7rhy9zzrf.jpeg?q=70",
    model: "SONY 138.8 cm (55 inch) Ultra HD (4K) LED",
    oldPrice: "Price: 78,000/-",
    offerPrice: "Offer Price: 64,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/i/m/-original-imagtvdyjzxgz3f7.jpeg?q=70",
    model: "LG UR7500 108 cm (43 inch) Ultra HD (4K) LED",
    price: "Price: 76,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/n/x/-original-imagu436gkxxcsqz.jpeg?q=70",
    model: "Mi X Series 125 cm (50 inch) Ultra HD (4K) LED",
    oldPrice: "Price: 55,000/-",
    offerPrice: "Offer Price: 49,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/b/g/n/-original-imagtwterapbxxdj.jpeg?q=70",
    model: "MOTOROLA EnvisionX 165 cm (65 inch) QLED Ultra HD (4K)",
    price: "Price: 42,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/3/r/6/-original-imaghqxamymfz8tu.jpeg?q=70",
    model: "Thomson 139 cm (55 inch) QLED Ultra HD (4K)",
    oldPrice: "Price: 33,000/-",
    offerPrice: "Offer Price: 29,000/-",
  },
  {
    productImage:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/television/4/q/m/-original-imagnvxzkgqp5ubf.jpeg?q=70",
    model: "iFFALCON by TCL U62 139 cm (55 inch) Ultra HD (4K) LED",
    price: "Price: 28,000/-",
  },
];
// const [product, setProduct] = useState(data);
const [product, setProduct] = useState([]);
const [inCart, setinCart]  = useState(0);
// const [oldprc, setinoldprc] = useState([]);
// product from page crash we can set dummy delay timeout here
setTimeout(()=>{
  setProduct(data)
}, 1500)
//in div instead of data.mpa we can use product.map
//actual  {data.map((prot, indx) => (
return (
  <div className="app">
    <div className="topnav">
      <div className="menu">
      <div className="home"><h6>Home</h6></div>
      <div className="about"><h6>About</h6></div>
      <div className="shop"><h6>Shop</h6></div>
      </div>
      <button className="cartbtn">Cart  {inCart}</button>
    </div>
    <div className="topdark">
      <div className="tpdinner">
      <h1 className="headline">Shop in style</h1>
      <p className="small-pera">With this shop hompeage template</p>
    </div>
    </div>
    <div className="cart-qtysec">
     
    </div>
    <div className="cart-area">
      {product?.map((prot, indx) => (
      <Productcard key={indx}
      productImage = {prot.productImage} 
      model = {prot.model}
      price = {prot.price}
      oldPrice={prot.oldPrice}
      offerPrice={prot.offerPrice}
      inCart={inCart}
      setinCart={setinCart}
      />
    ))}
    </div>
  </div>
  );
}

export default App;



