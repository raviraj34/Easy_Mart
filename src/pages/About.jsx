import React, { useEffect, useState } from 'react';

export const About = () => {
    const [products, setProducts] = useState([]);
    const [readMore, setReadMore] = useState({}); // State to track which products are expanded
    const [isExpanded, setisExpanded] = useState(false);

    const toggleCardHeight = ()=>{
        setisExpanded(!isExpanded);
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    const toggleReadMore = (id) => {
        setReadMore((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className='about'>
            <h1>About Us</h1>
            <div className="card-container" >
                {products.map((product) => {
                    const isReadMore = readMore[product.id]; // Get the read-more state for the current product
                    const maxLength = 50; // Set the maximum length for the description

                    return (
                        <div key={product.id} className="cardapi" id='card' >
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>
                                {isReadMore ? product.description : `${product.description.substring(0, maxLength)}...`}
                            </p>
                            <button onClick={() => toggleReadMore(product.id)}>
                                {isReadMore ? 'Read Less' : 'Read More'}
                            </button>
                            <p>Price: ${product.price}</p>
                            <div className="quantity  grid-3-col">
                                <button className="quantity-btn-neg">-</button>
                                <p>1</p>
                                <button className="quantity-btn-pos">+</button>
                            </div>
                            <div className="addtocart">
                            <button class="buttonCart">
                                 <span class="button__text">Add To Cart</span>
                                     <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                                </button>
                                </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
        