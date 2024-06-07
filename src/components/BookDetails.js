import React,{useEffect, useState} from 'react';
import  {useParams} from 'react-router-dom';
import { getBooks, purchaseBook } from '../api';

const BookDetails = ({addToCart}) => {
    const {id} = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        
        const fetchBook = async () => {
            try {
                const response = await getBooks();
                console.log("ID:", id);
                console.log("Response Data:", response.data);
                const selectedBook = response.data.find(book => book._id === id);
                setBook(selectedBook);
            } catch(err) {
                console.error(err);
            }
        };
        fetchBook();
    },[id]);

    const handlePurchase = async() => {
        try {
            const response = await purchaseBook(id);
            addToCart(response.data.book);
            alert('Book purchased successfully');
        } catch(err) {
            console.error(err);
        }
    };

    if(!book) return <div>Loading..</div>

    return(
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: ${book.price}</p>
            <p>Availability: {book.availability ? 'In Stock' : 'Out of Stock'}</p>
            <button onClick={handlePurchase} disabled={!book.availability}>Purchase</button>
        </div>
    );
};

export default BookDetails;