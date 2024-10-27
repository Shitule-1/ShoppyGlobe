import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/features/Slice";
import "../css/ProductDetail.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

function ProductDetail() {
    const count = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    
    // Add product to cart
function addButton() {
    
        dispatch(addItem(product)); // Pass product data to addItem action
        alert("item Added To Cart")
}

    const { id } = useParams(); // Get the product ID from the route parameters
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   console.log(product)
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: Unable to fetch product details.`);
                }

                const result = await response.json();
                setProduct(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) return <p>Loading product details...</p>;

    if (error) return (
        <div>
            <p style={{ color: 'red' }}>Error: {error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    );

    return (
        <div>
            {product ? (
<div className="product-item2">
  <div className="product-box2">
    <h2>{product.title}</h2>
    <p style={{color:"darkviolet", fontWeight:"bold"}}>Brand:{product.brand}</p>
    <img  src={product.images} alt="" />
    <p style={{color:"black"}}>Description of Product:<br></br>{product.description}</p>
    <p style={{color:"darkgreen"}}>Price: ${product.price}</p>
    {product.image && <img src={product.image} alt={product.title} style={{ width: "200px" }} />}
       <p style={{color:"blue", fontWeight:"bold"}}> stock in :{product.stock}</p>
       <p  style={{ fontWeight:"bold", color:"green"}}> Ratinig {product.rating}</p>

    <button className="btn btn-success" onClick={addButton}>Add to Cart</button>
     <p>
     <h3>Customer Reviews</h3>
     {product.reviews.map((review, index) => (
    <div key={index} className="review-item">
        <p><strong>Comment:</strong> {review.comment}</p>
        
        <p>
          <strong>Rating:</strong>
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`bi bi-star${i < review.rating ? "-fill" : ""}`}
              style={{ color: i < review.rating ? "#ffc107" : "#e4e5e9" }} // Filled stars are yellow, empty stars are gray
            ></i>
          ))} {review.rating} / 5
        </p>
        
        <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
    </div>
))}
    </p>
<p><div className="product-meta">
  <p><strong>Created At:</strong> {new Date(product.meta.createdAt).toLocaleDateString()}</p>
  <p><strong>Updated At:</strong> {new Date(product.meta.updatedAt).toLocaleDateString()}</p>
  <p><strong>Barcode:</strong> {product.meta.barcode}</p>
  <p>
    <strong>QR Code:</strong><br />
    <img src={product.meta.qrCode} alt="QR Code" style={{ width: "100px", height: "100px" }} />
  </p>
</div>
</p>
  <p>{product.returnPolicy}</p>
  </div>
</div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    );
}

export default ProductDetail;
