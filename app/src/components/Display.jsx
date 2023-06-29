import Card from "./Card";

// component to display the display structure that contains the books cards
function Display({ title, data }) {
	// depending on the title, the data will be either the books or the favorites
	// the data is mapped to the Card component

	return (
		<div className="Display">
			<h3>{title}</h3>
			<div className="display-box">
				{data.map((item, i) => (
					<div key={i} className="">
						{title === "Favorites" ? (
							<Card key={i} book={item} favorite={true} />
						) : (
							<Card key={i} book={item} favorite={null} />
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Display;
