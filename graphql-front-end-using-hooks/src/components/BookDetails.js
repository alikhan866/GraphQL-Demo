import React from 'react'
import { getBookQuery } from '../queries/queries'
import { useQuery } from '@apollo/client'

const BookDetails = (props) => {
    const { loading, error, data } = useQuery(getBookQuery, {
        variables: {
            id: props.bookId
        }
    })
    // console.log(data ? data.book : null)

    const displayBookDetails = () => {
        if (!loading) {
            const { book } = data
            if (book) {
                return (
                    <div>
                        <h2>{book.name}</h2>
                        <p>{book.genre}</p>
                        <p>{book.author.name}</p>
                        <p>All books by this author</p>
                        <ul className="other-books">
                            {book.author.books.map(item => {
                                return (
                                    <li key={item.id}>
                                        {item.name}
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div>No Book Selected</div>
                )
            }
        }
    }


    return (
        <div id="book-details">
            {displayBookDetails()}
        </div>
    )
}

export default BookDetails