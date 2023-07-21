const Book = prop => {
	const { handleUpdateShelve, book } = prop;

	const updateBookShelve = e => {
		handleUpdateShelve(book, e.target.value);
	};
	return (
		<div className="book col-2">
			<div className="book-title">{book.title}</div>
			<div>
				<div
					style={{
						width: 128,
						height: 193,
						backgroundImage:
							book.imageLinks && `url(${book.imageLinks.thumbnail})`,
					}}
				></div>
				<select
					onChange={updateBookShelve}
					value={book.shelf ? book.shelf : 'none'}
				>
					<option value="none" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
				</select>
			</div>
		</div>
	);
};

export default Book;
