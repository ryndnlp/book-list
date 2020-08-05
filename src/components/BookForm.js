import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
        dispatch({type: 'ADD_BOOK', book: {
            title,
            author
        }});
    }

    return(
        <form onSubmit={handleSubmit} id="form">
            <input type="text" placeholder="Book title" onChange={(e) => {setTitle(e.target.value)}} required/>
            <input type="text" placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}} required/>
            <button type="submit">Add book</button>
        </form>
    );

}

export default BookForm;