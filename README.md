# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?
   <br>Around 3 hours in total

3. What would you add to your solution if you had more time?
   <br>Solve the problem on the console related to use effect to display updated favorites

5. Share a code snippet that you are proud of and explain what it does<br>
```
  useEffect(() => {
		const isBookInFavorites = favorites.some(
			(favorite) => favorite.title === book.title
		);
		setIsFavorite(isBookInFavorites);
	}, [favorites, book]);
 ```
<br>
I'm proud of that code, mainly because is a simplification of other functions I was using before and is something fundamental for maintaining coherence with the books and favorites.<br>
<br>
7. How would you track down a performance issue in production? Have you ever had to do this?<br>
   I would add console logs in code areas that are displaying errors in the terminal if it is on the backend or in the inspected area of the browser. Then would check if the data displayed is expected or not and depending on that solve or rewrite the code by looking for help on Google/documentation.
   I always have to do that when implementing new features

---

# Comments

---

# Submission

After completing the challenge, commit it to Github.
