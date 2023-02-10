// Dark Mode
// Get the current value of the "dark-mode" key from local storage
let isDarkMode = localStorage.getItem("dark-mode");

// If the value is "true", set the "dark-mode" class on the <body> element
if (isDarkMode === "true") {
	document.querySelector(":root").classList.add("dark-mode");
}
// Add an event listener to the dark mode toggle button
function darkMode() {
	// If the "dark-mode" class is set on the <body> element
	if (document.querySelector(":root").classList.contains("dark-mode")) {
		// Remove the class and set the "dark-mode" key to "false" in local storage
		document.querySelector(":root").classList.remove("dark-mode");
		document
			.querySelector(".dark-light")
			.classList.replace("bi-sun-fill", "bi-moon-stars-fill");
		document.querySelector(".da-li-text").innerText = "Dark mode";
		localStorage.setItem("dark-mode", "false");
	} else {
		// Add the class and set the "dark-mode" key to "true" in local storage
		document.querySelector(":root").classList.add("dark-mode");
		document
			.querySelector(".dark-light")
			.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
		document.querySelector(".da-li-text").innerText = "Light mode";
		localStorage.setItem("dark-mode", "true");
	}
}

function getStars(rating) {
	// Round to nearest half
	rating = Math.round(rating * 2) / 2;
	let output = [];

	// Append all the filled whole stars
	for (var i = rating; i >= 1; i--)
		output.push(
			'<i class="bi bi-star-fill" aria-hidden="true" style="color: gold;"></i>&nbsp;'
		);

	// If there is a half a star, append it
	if (i == 0.5)
		output.push(
			'<i class="bi bi-star-half" aria-hidden="true" style="color: gold;"></i>&nbsp;'
		);

	// Fill the empty stars
	for (let i = 5 - rating; i >= 1; i--)
		output.push(
			'<i class="bi bi-star" aria-hidden="true" style="color: gold;"></i>&nbsp;'
		);

	return output.join("");
}

function CloseDetailPage() {
	document.querySelector(".book-detail").classList.remove("active");
}

// Function to generate Books
// (book)defines which books to be shown
// (bookRack)defines where books to be shown

// Function to Get ID of the Current Book

let book_list = JSON.parse(localStorage.getItem("book_list"));
function generateBook(book, bookRack) {
	const bookDiv = document.createElement("div");
	bookDiv.setAttribute("data-id", book["isbn"]);
	bookDiv.setAttribute("class", "book");

	const bookCover = document.createElement("div");
	bookCover.setAttribute("class", "book-cover");
	bookCover.setAttribute("data-filter-tag", book["tags"]);

	const bookImage = document.createElement("img");
	bookImage.setAttribute("src", book["image"]["src"]);
	bookImage.setAttribute("alt", book["image"]["alt"]);
	bookImage.setAttribute("width", "150px");

	const favBtn = document.createElement("span");
	favBtn.setAttribute("class", "fav-btn");

	const favIcon = document.createElement("i");
	favIcon.setAttribute("class", "bi bi-bookmark-heart");

	const bookTitle = document.createElement("div");
	bookTitle.setAttribute("class", "book-title");

	const bookName = document.createElement("h4");
	bookName.innerText = book["title"];

	const bookAuthor = document.createElement("p");
	bookAuthor.innerText = book["author"];

	bookRack.append(bookDiv);
	bookDiv.append(bookCover);
	bookCover.append(bookImage);
	bookDiv.append(favBtn);
	favBtn.append(favIcon);
	bookDiv.append(bookTitle);
	bookTitle.append(bookName);
	bookTitle.append(bookAuthor);
}



function toggleFavourites() {
	const favButton = document.querySelectorAll(".fav-btn");

	
	for (const i of favButton) {
		const thisBook = i.parentElement.dataset.id;
		const favBook = userId["favourites"];
		i.addEventListener("click", () => {
			if (favBook.length != 0) {
				for (let f of favBook) {
					if (thisBook.includes(f)) {
						const removeBook = favBook.findIndex(
							(removeBook) => removeBook == thisBook
							);
							console.log(favBook)
							favBook.splice(removeBook, 1);
							getUserData();
							removeUserData();
							setUserData(user_data);
							checkForFavourites();
							location.reload();
							return
					}
				}
				favBook.push(thisBook);
			} else {
				favBook.push(thisBook);
			}
			getUserData();
			removeUserData();
			setUserData(user_data);
			location.reload();
		});
	}
}

function checkForFavourites() {
	let Books = document.querySelectorAll(".fav-btn");
	let userInfo = userId["favourites"];
	for (let i of Books) {
		if (userInfo.includes(i.parentElement.dataset.id)) {
			i.classList.add("active");
			i.firstChild.classList.replace(
				"bi-bookmark-heart",
				"bi-bookmark-heart-fill"
			);
		}
		if (!userInfo.includes(i.parentElement.dataset.id)) {
			i.classList.remove("active");
			i.firstChild.classList.replace(
				"bi-bookmark-heart-fill",
				"bi-bookmark-heart"
			);
		}
	}
}

// Function for Searching Books in Search Bar
function SearchBooks() {
	let searchValue = document.getElementById("head-search");
	searchValue = searchValue.value.toLowerCase();

	let Books = document.querySelectorAll(".book");

	for (let i of Books) {
		let book = i.innerHTML.toLowerCase();

		if (!book.includes(searchValue)) {
			i.style.display = "none";
		} else if (book.includes(searchValue)) {
			i.style.display = "block";
		}
	}
}

function getUserData() {
	const userJson = localStorage.getItem("user_data");

	if (userJson == undefined ||userJson == null) {
		const data = [];
		data_json = JSON.stringify(data);
		localStorage.setItem("user_data", data_json);
		localJson = localStorage.getItem("user_data");
		const user_data = JSON.parse(localJson);
		return user_data;
	} else {
		const user_data = JSON.parse(userJson);
		return user_data;
	}
	
}

function removeUserData() {
	localStorage.removeItem("user_data");
}

function setUserData(data) {
	const userJson =  JSON.stringify(data)
    localStorage.setItem("user_data", userJson)
}

function getBookDetails() {
	let bookCovers = document.getElementsByClassName("book-cover");
	for (let bookCover of bookCovers) {
		bookCover.addEventListener("click", () => {
			let dataId = bookCover.parentElement.dataset.id;
			let bookId = book_list.find((book) => book.isbn == dataId);

			document.querySelector(".book-detail").classList.add("active");

			const bookDes = document.querySelector(".book-description");
			const bookAuthor = document.querySelector(".book-content p");
			const bookTitle = document.querySelector(".book-content h4");
			const bookImage = document.querySelector(".book-image img");
			const StarRating = document.getElementById("stars");
			const borrowBtn = document.getElementById("borrow-now");

			bookDes.innerHTML = bookId.description;
			bookAuthor.innerHTML = bookId.author;
			bookTitle.innerHTML = bookId.title;
			bookImage.setAttribute("src", bookId["image"]["src"]);
			bookImage.setAttribute("alt", bookId["image"]["alt"]);
			StarRating.innerHTML = getStars(bookId.star_rating);
			if (bookId.isBorrowable === false) {
				borrowBtn.innerText = "Currently Not Available";
				borrowBtn.disabled = true;
			} else if (bookId.isBorrowable === true) {
				borrowBtn.dataset.bookDetail = bookId["isbn"];
				borrowBtn.disabled = false;
				borrowBtn.innerText = "Borrow Now";
			}

			
		});
	}
}


