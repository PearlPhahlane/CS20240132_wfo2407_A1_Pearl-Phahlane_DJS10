import React, { useState, useEffect } from 'react';

const BlogPosts = () => {

    //state management 
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        //fetch API call
        const fetchPost = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok) {
                    throw new Error('Data fetching failed');
                }
                const data = await response.json();
                setPost(data);
            }   catch(err) {
                setError(err.message);
            }
        };
        
        fetchPost();
    }, []); //empty dependency array ensures this runs only once

}