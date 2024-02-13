import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../BookSearch/Search.css'



const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBookDetails = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();
                setBook(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    const getCoverUrl = (book) => {
        if (book && book.covers && book.covers.length > 0) {
            const coverId = book.covers[0];
            return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
        }
        return 'https://via.placeholder.com/150';
    };

    return (
        <div className="container">
            <div className="content">
                {loading ? (
                    error ? (
                        <div>There was an error. Please refresh the page or go back to the previous page.</div>
                    ) : (
                        <div>Loading...</div>
                    )
                ) : (
                    <div>
                        <div className='bookCover'>
                            <img
                                src={getCoverUrl(book)}
                                alt={`Cover of ${book.title}`}
                                style={{ width: "150px", height: "auto" }}
                            />
                        </div>

                        <div className="bookDetails">
                            <p>{book.title}</p>
                            <p>{book.description?.value}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookDetails;
