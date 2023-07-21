import Book from './Book';

const BookShelve = prop => {
	const { title, bookShelveData, handleUpdateShelve } = prop;
	return (
		<div className="book-shelve">
			<h4 className="mt-4">{title}</h4>
			<div className="line" />
			<div className="book-list row">
				{bookShelveData.map((book, index) => (
					<Book
						book={book}
						key={index}
						handleUpdateShelve={handleUpdateShelve}
					/>
				))}
			</div>
		</div>
	);
};

export default BookShelve;
