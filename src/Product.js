import React,{useContext} from 'react'
import "./Product.css"
import stateContext from './Context'

function Product({image,rating,price,title}) {
   const {bucket,SetBucket} = useContext(stateContext)
   function handlechange(){
    let value3 = Math.floor(Math.random() * 1000)
    SetBucket(prevstate=>[...prevstate,{
        id:value3,
         image,
        title,
        price,
        rating
    }]);

   }
   
    return (
        <div className="product">
        <div className= "productInfo">
        <p>{title}</p>
        <p> 
        <small>£</small>
        <strong>{price}</strong>
        </p>
        <p>{Array(rating).fill().map(()=>"⭐")}</p>
        </div>
        
        <img src={image} alt="images"/>
        <button onClick={handlechange}>Add to basket</button>
        </div>
    )
}

export default Product
