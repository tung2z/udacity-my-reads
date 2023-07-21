import { useState } from 'react';
import BookShelve from '../components/Bookshelve';

const Home = props => {
	const { booksData, handleUpdateShelve } = props;
	let currentlyReadingBook = [];
	let wantToReadBook = [];
	let readBook = [];

	let temp = [];
	if (booksData.length !== 0) {
		booksData.forEach(book => {
			switch (book.shelf) {
				case 'currentlyReading':
					currentlyReadingBook = [...currentlyReadingBook, book];
					break;
				case 'wantToRead':
					wantToReadBook = [...wantToReadBook, book];
					break;
				case 'read':
					readBook = [...readBook, book];
					break;
			}
		});
	}

	return (
		<div className="home">
			{booksData.length != 0 && (
				<div>
					<BookShelve
						title={'Currently Reading'}
						bookShelveData={currentlyReadingBook}
						handleUpdateShelve={handleUpdateShelve}
					/>
					<BookShelve
						title={'Want to read'}
						bookShelveData={wantToReadBook}
						handleUpdateShelve={handleUpdateShelve}
					/>
					<BookShelve
						title={'Read'}
						bookShelveData={readBook}
						handleUpdateShelve={handleUpdateShelve}
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
