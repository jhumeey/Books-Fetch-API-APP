import { useEffect, useState } from 'react'

export const useFetchBooks = () => {
    
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // useEffect can be compared to componentDidMount,
    // componentDidUpdate and componentDidUnmount
    // read more about useEffect here:
    // https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {

        // First we set the loading and error states
        setLoading(true)
        setError(null)

        fetch('https://www.anapioficeandfire.com/api/books?pageSize=30')
            .then(res => res.json())
            .then((data) => {
                setLoading(false)
                setBooks(data);

                // if (json.books) {
                //     setBooks(json.books)
                // } else {
                //     setBooks([])
                // }
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])
    return { books, loading, error }
}