import React, {useEffect, useState, usestate} from 'react';
import {getBooks} from '../api.js';
import BookList from './BookList.js';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        const fetchBooks = async () => {
            try {
                console.log('Fetching books...');
                const response = await getBooks();
                console.log('Response received:', response);
                setBooks(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBooks();
    },[]);

    return (
        <div>
            <h1>Available Books</h1>
            <BookList books={books}/>
        </div>
    );
};

export default Home;