import React, { useState } from 'react';
import logo from './b-reading.svg'


function App() {
    const [books, setBooks] = useState(null);

    const fetchData = () => {
        fetch('https://www.anapioficeandfire.com/api/books?pageSize=30', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBooks(data);
            })
            .catch((error) => {
                console.error('Error: There was an error trying to login', error.message);
            });

    }
    return (
        <div className="b-main-container">
            <div className="b-white-container">
                <div className="b-logo">

                </div>
                <div className="b-intro-container">
                    <div className="b-fetch-container">
                        <div className="b-dream-container" >
                            <div className="b-note-container">
                                <h1>A Book is a Dream </h1>
                                <h2>that you Hold in Your Hand</h2>
                                <div>
                                    <button className="fetch-button" onClick={fetchData}>
                                        Fetch Data
                        </button>
                                    <br />
                                </div>
                            </div>
                            <div className="b-reading-container">
                                <img src={logo} alt="Logo" />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="b-grey-container">
                <div className="b-data-container">
                    <div className="books">
                        {books &&
                            books.map((book, index) => {
                                const cleanedDate = new Date(book.released).toDateString();
                                const authors = book.authors.join(', ');

                                return (
                                    <div className="book" key={index}>
                                        <h3>Book {index + 1}</h3>
                                        <h2>{book.name}</h2>

                                        <div className="details">
                                            <p><span role="img" aria-label="face">👨</span>: {authors}</p>
                                            <p><span role="img" aria-label="book">📖</span>: {book.numberOfPages} page </p>
                                            <p><span role="img" aria-label="country">🏘️ </span>: {book.country}</p>
                                            <p><span role="img" aria-label="donut">⏰ </span>: {cleanedDate}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

            </div>
        </div>
        
    );
}


export default App;
