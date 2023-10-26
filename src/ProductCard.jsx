import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Productcard ({productImage, model, price, oldPrice, offerPrice, inCart, setinCart}) {
    const [show, setShow] = useState(true)
    // const [oldshow, setoldshow] = useState(true)
  
    const addbtunfunc = () => {
      //add button function change to Remove button
      setShow(!show)
      setinCart(inCart+1)
    }
    const remvbtunfunc = () => {
      //Remove button function change to Add button
      setShow(!show)
      setinCart(inCart-1)
    }

    // const oldPricefun = () => {
    //   setoldshow(oldshow)
    //   setinoldprc(oldprc !== price)
    // }
    return (
    <div className="main-card">
      <img className="imge" src={productImage} alt="no data avaliable"/> 
      <h4 className="mdel">{model}</h4>
      <h3 className="price">{price}</h3>
    
      <h3 className="old-price">{oldPrice}</h3> 
      <h3 className="offer-price">{offerPrice}</h3>
    
      {show === true ?
      <button className="bttn" onClick={addbtunfunc}>Add to Cart</button> :
      <button className="bttn" onClick={remvbtunfunc}>Remove from Cart</button>
  }
    </div>
    )
  }
export default Productcard;