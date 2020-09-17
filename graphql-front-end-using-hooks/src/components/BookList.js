import React, { useState } from 'react';
import { useQuery } from '@apollo/client'
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails'

const BookList = () => {
    const [selected, setSelected] = useState(null)
    const { loading, error, data } = useQuery(getBooksQuery);
    loading ? console.log("loading") : console.log(data)
    const displayBooks = () => {
        if (loading) {
            return (
                <div>Loading Books....</div>
            )
        } else if (data) {
            return data.books.map(book => {
                return (
                    <li onClick={(e) => { setSelected(book.id) }} key={book.id}>{book.name}</li>
                )
            })
        } else if (error) {
            return (
                <div>{error}</div>
            )
        }
    }
    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails
                bookId={selected}
            />
        </div>
    )
}

export default BookList