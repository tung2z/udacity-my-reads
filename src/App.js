import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import { useEffect, useState } from 'react';
import { getAll, search, update } from './utils/BookAPI';

function App() {
	let navigate = useNavigate();
	const [books, setBooks] = useState([]);
	const [seachedbooks, setSearchedBooks] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const getAllBook = async () => {
		await getAll().then(res => {
			if (res) {
				setBooks(res);
				setSearchedBooks(res);
			}
		});
	};

	const searchBook = async () => {
		// await search({ query: searchQuery, maxResults: 20 }).then(res => {
		// 	if (res) {
		// 		setSearchedBooks(res);
		// 	}
		// });
		let filterBook = books.filter(book =>
			book.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setSearchedBooks(filterBook);
	};

	const handleUpdateShelve = async (book, shelf) => {
		debugger;
		await update(book, shelf);
		getAllBook();
	};

	const handleSearchQuery = e => {
		setSearchQuery(e.target.value);
	};

	useEffect(() => {
		if (searchQuery) {
			searchBook();
		} else {
			setSearchedBooks(books);
		}
	}, [searchQuery]);

	useEffect(() => {
		getAllBook();
	}, []);

	return (
		<div className="App">
			<div>
				<button
					type="button"
					className="btn btn-primary me-2 ms-2"
					onClick={() => navigate('/')}
				>
					Home
				</button>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => navigate('/search')}
				>
					Search
				</button>
			</div>
			<Routes>
				<Route
					path="/"
					element={
						<Home booksData={books} handleUpdateShelve={handleUpdateShelve} />
					}
				/>
				<Route
					path="/search"
					element={
						<Search
							booksData={seachedbooks}
							handleSearchQuery={handleSearchQuery}
							handleUpdateShelve={handleUpdateShelve}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
