import Display from "./components/Display";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
	const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const localFavorites = localStorage.getItem("favorites");

  useEffect(() => {
    console.log(localFavorites);
    fetchBooks();
    fetchFavorites();
  }, []); // this will run the fetchFavorites function when the favorites state changes
 
  useEffect(() => {
    if (localFavorites !== favorites) { 
      fetchFavorites();
    }
  }, [favorites]); // this will run the fetchFavorites function when the favorites state changes

	// this takes the "favorites" data from the local storage and sets it to the favorites state
  const fetchFavorites = () => {
		
    const localFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
      setFavorites(localFavorites);
	};

	// this fetches the books data from the json file and sets it to the books state
	const fetchBooks = async () => {
		try {
			const res = await fetch("/books.json");
			console.log(res);
			const data = await res.json();
			console.log(data);
			if (data) {
				setBooks(data);
			} else {
				console.error("Data is undefined");
			}
		} catch (err) {
			console.error(err);
		}
	};

	// const fetchFavorites = async () => {
	//   const localFavorites = JSON.parse(
	// 		localStorage.getItem("favorites") || "[]"
	//   );
	//   setFavorites(localFavorites);

	// }

	// render the Display component twice, once for the books and once for the favorites
	return (
		<div className="App">
			<div className="container">
        <Display title={"Books"} data={books}  />
        <Display title={"Favorites"} data={favorites} />

			</div>
		</div>
	);
}

export default App;
