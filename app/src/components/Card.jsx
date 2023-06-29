import AddCircleIcon from "@mui/icons-material/AddCircle";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { useState, useEffect } from "react";

export default function Card({ book, favorite }) {
	// reference to the favorites array in localStorage
	var favorites = JSON.parse(
		localStorage.getItem("favorites") || "[]"
	);
	const [isfavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const isBookInFavorites = favorites.some(
			(favorite) => favorite.title === book.title
		);
		setIsFavorite(isBookInFavorites);
	}, [favorites, book]);

	const handleAddFav = (book) => {
		const updatedFavorites = [...favorites, book];
		localStorage.setItem(
			"favorites",
			JSON.stringify(updatedFavorites)
		);
		setIsFavorite(true);
	};

	// to ways to remove a book from favorites: by clicking the star icon or the delete icon
	const handleNotFav = () => {
		handleRemovefav(book);
		setIsFavorite(false);
	};

	const handleRemovefav = (book) => {
		const updatedFavorites = favorites.filter(
			(favorite) => favorite.title !== book.title
		);
		localStorage.setItem(
			"favorites",
			JSON.stringify(updatedFavorites)
		);
		setIsFavorite(false);
	};

	return (
		<div className="Card">
			<div className="text">
				<h4>{book.author}</h4>
				<h2>{book.title}</h2>
				<p>{book.pages} pages</p>
			</div>
			<img src={book.imageLink} alt="" />

			<div className="bottom-text">
				<p>READ MORE</p>
				<a className="more">
					<AddCircleIcon />
				</a>
				{favorite === null ? (
					!isfavorite ? (
						<a className="fav" onClick={() => handleAddFav(book)}>
							<StarOutlineRoundedIcon />
						</a>
					) : (
						<a className="fav" onClick={handleNotFav}>
							<GradeRoundedIcon />
						</a>
					)
				) : (
					<a className="delete" onClick={() => handleRemovefav(book)}>
						<RemoveCircleRoundedIcon />
					</a>
				)}
			</div>
		</div>
	);
}
