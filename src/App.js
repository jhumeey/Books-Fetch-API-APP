import React from 'react';
import logo from './b-reading.svg';
import LoadingSpinner from './loadingSpinner';
import { useFetchBooks } from './FetchBooks';

function App() {
    const { books, loading, error } = useFetchBooks();
    return (
        <div className="b-main-container">
            <div className="b-white-container">
                <div className="b-logo">

                </div>
                <div className="b-intro-container">
                    <div className="b-fetch-container">
                        <div className="b-dream-container" >
                            <div className="b-reading-container">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="b-note-container">
                                <h1>More Than Just Books </h1>
                                <p>A book is a dream that you hold in your hand</p>
                                <div>
                                    <button className="fetch-button" >
                                        Get Books
                                    </button>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="b-grey-container">
                <div className="b-data-container">
                    <div className="books">
                        { loading? <LoadingSpinner /> : books &&
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