import { useEffect, useState } from 'react';
export const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState("");

    useEffect(() => {

        setLoading(true)
        setError(null)

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setLoading(false)
                setBooks(data);
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [url])
    return { books, loading, error, setUrl, setBooks }
}