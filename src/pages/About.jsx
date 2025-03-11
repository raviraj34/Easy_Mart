import React, { useEffect, useState } from 'react';

export const About = () => {
    const [products, setProducts] = useState([]);
    const [readMore, setReadMore] = useState({}); // State to track which products are expanded

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
            <div className="card-container">
                {products.map((product) => {
                    const isReadMore = readMore[product.id]; // Get the read-more state for the current product
                    const maxLength = 50; // Set the maximum length for the description

                    return (
                        <div key={product.id} className="cardapi">
                            <img src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <p>
                                {isReadMore ? product.description : `${product.description.substring(0, maxLength)}...`}
                            </p>
                            <button onClick={() => toggleReadMore(product.id)}>
                                {isReadMore ? 'Read Less' : 'Read More'}
                            </button>
                            <p>Price: ${product.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
        