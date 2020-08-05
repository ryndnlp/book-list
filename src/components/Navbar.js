import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


export default function Navbar() {
    const { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>There are {books.length} books to read.</p>
        </div>
    )
}
