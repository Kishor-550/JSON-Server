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
function generateBook(book,bookRack,bookData){


	const bookDiv = document.createElement("div");
	
	
	bookRack.append(bookDiv);
	bookDiv.innerHTML = `<div class="book-cover" >
            <img src="${book.image_url}" alt="" width="150px">
          </div>
		  <span class="fav-btn "><i class="bi bi-bookmark-heart"></i></span>
          <div class="book-title" >
              <h5>${book.title}</h5>
              <p>${book.author}</p>
          </div>`;
	bookDiv.setAttribute("data-id", book.isbn);
	// bookDiv.setAttribute("data-aos", "fade-up");
	// bookDiv.setAttribute("data-aos-anchor-placement", "top-bottom");
	bookDiv.setAttribute("class", "book");

	
	

	// Function to Get ID of the Current Book
	function getBookId() {
		let dataId = bookDiv.getAttribute("data-id");
		let bookId = bookData.find((u) => u.isbn == dataId);
		return bookId;
	}


	
	// Event Listener for each book when it's clicked
	bookDiv.addEventListener("click", () => {
		document.querySelector(".book-detail").classList.add("active");
	
		let bookId = getBookId();
	
		const bookDes = document.querySelector(".book-description");
		const bookAuthor = document.querySelector(".book-content p");
		const bookTitle = document.querySelector(".book-content h4");
		const bookImage = document.querySelector(".book-image img");
		const StarRating = document.getElementById("stars");
		const borrowBtn = document.getElementById("borrow-now");
	
		bookDes.innerHTML = bookId.description;
		bookAuthor.innerHTML = bookId.author;
		bookTitle.innerHTML = bookId.title;
		bookImage.setAttribute("src", bookId.image_url);
		StarRating.innerHTML = getStars(bookId.star_rating);
		if (!bookId.isBorrowable) {
			borrowBtn.innerText = "Currently Not Available";
			borrowBtn.disabled = true;
		} else if (bookId.isBorrowable) {
			borrowBtn.disabled = false;
			borrowBtn.innerText = "Borrow Now";
		}
	

		// Event Listener for Modal Box
		const modalCloseBtn = document.querySelector(".modal-close");
	
		modalCloseBtn.addEventListener("click", () => {
			document.querySelector(".backdrop").classList.remove("active");
			document.querySelector(".modal").classList.remove("active");
		});
		borrowBtn.addEventListener("click", () => {
			document.getElementsByName("book-title")[0].value = bookId.title;
			document.querySelector(".backdrop").classList.add("active");
			document.querySelector(".modal").classList.add("active");
		});
	});

	
}

function toggleFavourites(){
	const favBtn = document.querySelectorAll('.fav-btn')

	for (const i of favBtn) {
		i.addEventListener("click",(e)=>{
			const thisBook = i.parentElement.dataset.id
			const favBook = userId["favourites"]

			for (const f of favBook) {
				if (thisBook.includes(f)) {
					const rem = favBook.findIndex(rem => rem == thisBook)
					favBook.splice(rem, 1)
					return checkForFavourites()
				} 
				else
				 if (!thisBook.includes(f)){
					 favBook.push(thisBook)
					 return checkForFavourites()
	
				} 
				
			}
			
		})
		
	}
}
	

function checkForFavourites(){

	let Books = document.querySelectorAll(".fav-btn");
	let userInfo = userId["favourites"]


	// if (userInfo.length != 0 && userInfo !== undefined) {
		
		
		for (let i of Books) {
			for (const j of userInfo) {
			
			if (i.parentElement.dataset.id.includes(j)) {
				
				i.classList.add("active")
				i.firstChild.classList.replace("bi-bookmark-heart","bi-bookmark-heart-fill")
			} else if (i.parentElement.dataset.id.includes(!j)) {
				
				i.classList.remove("active")
				i.firstChild.classList.replace("bi-bookmark-heart-fill","bi-bookmark-heart")
			}
			}
			
		}
	// } 

		
	}
	


// Function for Searching Books in Search Bar
function SearchBooks() {
	let searchValue = document.getElementById("head-search");

	let Books = document.querySelectorAll(".book");
	searchValue = searchValue.value.toLowerCase();

	for (let i of Books) {
		let book = i.innerHTML.toLowerCase();

		if (!book.includes(searchValue)) {
			i.style.display = "none";
		} else if (book.includes(searchValue)) {
			i.style.display = "block";
		}
	}
}
