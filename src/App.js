import React, { useState } from 'react';
import logo from './b-reading.svg';
import { useFetchBooks } from './FetchBooks';

function App() {
    const { books, loading, setUrl } = useFetchBooks();
    const [searchInput, setSearchInputValue] = useState("");
    let newBooksList = books;
    const elementStyle = {
        borderRadius: '10px',
        position: 'absolute',
        right: '10px',
        height: '50px',
        width: '200px',
        marginTop: '4%',
        boxShadow: '5px 5px 5px 3px rgb(224, 219, 219)',
        padding: '10px',
        border: 'none'

    }
    const handleChange = (e) => {
        setSearchInputValue(e.target.value);
    }
    const filtered = () => {
        newBooksList = books.filter(book => {
            return book.name.toLowerCase().includes(searchInput.toLowerCase())
        })
    }
    filtered();

    return (

        <div className="b-main-container">
            <div className="b-white-container">
                <div className="b-logo">

                </div>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={handleChange} />
                <div className="b-intro-container">
                    <div className="b-fetch-container">
                        <div className="b-dream-container" >
                            <div className="b-reading-container">
                                <img src={logo} alt="Logo" />
                            </div>
                            <div className="b-note-container">
                                <h1>More Than Just Books </h1>
                                <p>A book is a dream that you hold in your hand. <br />
                                    Books are the ultimate Dumpees: put them down and they’ll wait for you forever; pay attention to them and they always love you back.
                                </p>
                                <div>
                                    <button className="fetch-button" onClick={() => setUrl(`https://www.anapioficeandfire.com/api/books?pageSize=${Math.floor(
                                        Math.random() * 30
                                    ) + 1}`)}>
                                        {loading ? "Loading...." : "Get Books"}
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
                        {newBooksList &&
                            newBooksList.map((book, index) => {
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