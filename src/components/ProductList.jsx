import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link } from "react-router-dom"; 
import { useState } from "react";
import useCustomeHook from "./customeHook";
import "../css/ProductList.css"
function ProductList(){
//     useEffect(()=>{
//        fetchData()
//     },[])

//    async function fetchData(){
//         const response= await  fetch("https://dummyjson.com/products")
//        const result=await response.json()
//        console.log(result)}
 //above code for fetchind data from api without custome hook 
  
 //below code to fetch api using custome hook
    const {data}=useCustomeHook("https://dummyjson.com/products")
    console.log(data)
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = data?.products?.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
 return (<>
        <div className="productlistDiv">
        <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3" // Optional Bootstrap class for styling
            />
     <div className="product-list">
    <ul>
        {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <li key={product.id} className="product-item">
                    <p style={{fontWeight:"bold"}} className="product-box">{product.title} 
                    <p style={{color:"blue"}}>Discount:{product.discountPercentage}%</p>
                     <img src={product.images}  style={{width:"100px", height:"100px"}} alt="image Loading.." />
                    <p style={{color:"green"}}>{product.availabilityStatus}</p>
                    <Link to={`/product/${product.id}`}> <button className="btn btn-primary">View Detail</button></Link>

                    </p>
                </li>
            ))
        ) : (
            <li>No products found</li>
        )}
    </ul>
</div>

        </div>
        
    </>)

}
export default ProductList