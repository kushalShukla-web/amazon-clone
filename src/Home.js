import React from 'react'
import image from "./images/jstu.jpg"
import "./css/Home.css"
import Product from "./Product"
function Home() {
    return (
        <>
            <img src={image}  alt="Morejstu" className="Poster"/>
          <div className="product_poster">
          <Product
            title="best Ipod of boat in low price!!"
                image="https://m.media-amazon.com/images/I/319N5XBU5XL._AC_SY200_.jpg"
                rating={3}
                price={11.96}
            />
            <Product
            title="discount in alexa buy it now !!"
                image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                price={18.6}
            />
           </div>
           <div>
           <Product
            title="Buy SONY TV braviea online. get 30% discount!!"
                image="https://m.media-amazon.com/images/I/81t9bFDmxBS._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                price={30}
            />
            
            <Product
            title="Buy playstation in least price !yoyo"
                image="https://m.media-amazon.com/images/I/71FDXB1aKWL._AC_UY327_FMwebp_QL65_.jpg"
                rating={5}
                price={30}
            />
            </div>
          
            

        </>
    )
}

export default Home
