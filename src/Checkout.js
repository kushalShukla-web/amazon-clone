import React,{useContext} from 'react'
import stateContext from './Context/Context.js'
import "./css/Product.css"
function Checkout() {
    const {bucket,SetBucket} = useContext(stateContext)
    console.log(bucket)
    function handlechange(id){
       const newList = bucket.filter((item)=>item.id!==id);
       SetBucket(newList)
    }
    
    return (
        

<div>{bucket.map((t)=>(
    <>
    <div className="product">
        <div className= "productInfo">
        <p>{t.title}</p>
        <p> 
        <small>£</small>
        <strong>{t.price}</strong>
        </p>
        <p>{Array(t.rating).fill().map(()=>"⭐")}</p>
        </div>
        
        <img src={t.image} alt="images"/>
        <button onClick={()=>{handlechange(t.id)}}>remove  basket</button>
        </div>
</>
))}</div>
    )
}

export default Checkout
