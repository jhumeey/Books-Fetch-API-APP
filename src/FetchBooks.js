import { useEffect, useState } from 'react'

export const useFetchBooks = () => {
    
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        setLoading(true)
        setError(null)

        fetch('https://www.anapioficeandfire.com/api/books?pageSize=30')
            .then(res => res.json())
            .then((data) => {
                setLoading(false)
                setBooks(data);
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])
    return { books, loading, error }
}