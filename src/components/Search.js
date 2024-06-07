import React, { useState } from 'react';
import { searchBooks  } from '../api';
import BookList from './BookList';

const Search = () => {
    const[query, setQuery] = useState('');
    const[books,setBooks] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await searchBooks(query);
            setBooks(response.data);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Search Books</h1>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <BookList books={books}/>
        </div>
    );
};

export default Search;