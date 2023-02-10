AOS.init();



// let book_list = JSON.parse(localStorage.getItem("book_list"));


function getUserData(){
const userJson = localStorage.getItem("user_data")
const user_data = JSON.parse(userJson)

return user_data
}
function removeUserData(){
localStorage.removeItem("user_data")
}

function setUserData(){
	const userJson =  JSON.stringify(user_data)
    localStorage.setItem("user_data", userJson)
}

 
const user_data = JSON.parse(localStorage.getItem("user_data"))
const data = user_data;
let id = localStorage.getItem("id");
let userId = data.find((u) => u.id == id);


const popularBookData = popular_book_list;

for (const book of popularBookData) {
	const bookRack = document.querySelector(".generated-books");

	generateBook(book, bookRack, popularBookData);
}

const intrestingBookData = intresting_book_list;
for (const book of intrestingBookData) {
	const bookRack = document.querySelector(".intresting-books");

	generateBook(book, bookRack, intrestingBookData);
}

toggleFavourites();



checkForFavourites();

let favBooks = userId.favourites;
document.querySelector(".avail-books").innerHTML += book_list.length;
document.querySelector(".fav-books").innerHTML = favBooks.length;
document.querySelector(".chart").setAttribute("data-percent",`${book_list.length}`);
document.querySelector(".fav-chart").setAttribute("data-percent", `${favBooks.length}`);
document.querySelector(".borrowed-books").innerHTML = userId['borrow_history'].length
document.querySelector(".borrow-chart").setAttribute("data-percent", `${userId['borrow_history'].length}`);

let element = document.querySelectorAll(".chart");
for (const i of element) {
	new EasyPieChart(i, {
		size: 120,
		lineWidth: 13,
		barColor: "#ffffff",
		trackColor: "#ffffff55",
		scaleColor: "transparent",
	});
}

getBookDetails()

// Event Listener for Modal Box

const modalCloseBtn = document.querySelector(".modal-close");
const borrowBtn = document.getElementById("borrow-now");

modalCloseBtn.addEventListener("click", () => {
	document.querySelector(".backdrop").classList.remove("active");
	document.querySelector(".modal").classList.remove("active");
});
	borrowBtn.addEventListener("click", () => {
	const borrowDate = document.getElementById("borrow-date")
	const dueDate = document.getElementById("due-date")
	document.querySelector(".backdrop").classList.add("active");
	document.querySelector(".modal").classList.add("active");
	let bookId = borrowBtn.dataset.bookDetail;
	const reqBook = book_list.find((b) => b.isbn == bookId)
	document.getElementById("book-title").value = reqBook.title;
	const borrowNow = document.querySelector(".modal-submit");

	borrowNow.addEventListener("click",()=>{
		if (borrowDate.value != '' && dueDate.value != '') {
		let bookExists = false;
		for (const i of userId["borrow_history"]) {
			if (i['book_id'] == bookId) {
				bookExists = true;
				break;
			}
		}
		if (bookExists === true) {
			alert("Book Already Exists")
		} else{
			const indexOfUser = data.indexOf(userId);
			data.splice(indexOfUser, 1);
			const borrow_obj = new Object();
			borrow_obj.id = userId["borrow_history"].length + 1
			borrow_obj.current_date = new Date();
			borrow_obj.borrow_date = borrowDate.value ;
			borrow_obj.due_date = dueDate.value;
			borrow_obj.submitted_date = "-";
			borrow_obj.status = "Pending";
			borrow_obj.book_id = bookId;
			userId["borrow_history"].push(borrow_obj)
			// userId["borrow_history"] = []
			data.push(userId);
			setUserData(data);
			location.reload()
		}
	} else {
		alert("Both Dates are Required")
	}

	})
});















// const bookDivs = document.getElementsByClassName("book")

// for (const bookDiv of bookDivs) {
// 	bookDiv.addEventListener("click",()=>{
// 		let bookId = bookDiv.dataset.id
// 		console.log(bookId);

// 	})
// }
