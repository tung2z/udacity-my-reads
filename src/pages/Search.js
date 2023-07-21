import BookShelve from '../components/Bookshelve';

const Search = props => {
	const { booksData, handleSearchQuery, handleUpdateShelve } = props;
	return (
		<div>
			<div className="mt-4">
				<h5>Search</h5>
				<input
					className="form-control mt-2"
					type="text"
					onChange={handleSearchQuery}
				/>
			</div>
			<BookShelve
				title={'Search Result'}
				bookShelveData={booksData}
				handleUpdateShelve={handleUpdateShelve}
			/>
		</div>
	);
};

export default Search;
