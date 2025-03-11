import React, { useEffect, useState } from 'react';

const Postapi = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
                const result = await response.json();
                setData(result);
                console.log(result); // This logs the fetched data to the console
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div>
         
        </div>
    );
};

export default Postapi;