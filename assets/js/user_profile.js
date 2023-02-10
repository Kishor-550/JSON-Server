const id = localStorage.getItem("id");
const data = getUserData();
let userId = data.find((u) => u.id == id);
const profDisp = document.querySelector(".user-image");
const udInput = document.querySelectorAll(".ud-input");
const firstName = document.getElementById("ud-first-name");
const lastName = document.getElementById("ud-last-name");
const displayName = document.getElementById("ud-display-name");
const dateOfBirth = document.getElementById("ud-dob");
const phoneNumber = document.getElementById("ud-phone-number");
const emailAddress = document.getElementById("ud-email");
const editBtn = document.querySelector(".user-detail-edit");
const cancelBtn = document.getElementsByClassName("user-detail-cancel")[0];
const saveBtn = document.getElementsByClassName("user-detail-save")[0];

editBtn.addEventListener("click", () => {
	event.preventDefault();
	for (const i of udInput) {
		i.removeAttribute("readonly");
	}
	editBtn.style.display = "none";
	cancelBtn.style.display = "block";
	saveBtn.style.display = "block";
});
cancelBtn.addEventListener("click", () => {
	event.preventDefault();
	location.reload();
});
saveBtn.addEventListener("click", () => {
	event.preventDefault();
	userId["first_name"] = firstName.value;
	userId["last_name"] = lastName.value;
	userId["name"] = displayName.value;
	userId["dob"] = dateOfBirth.value;
	userId["username"] = emailAddress.value;
	userId["phone_number"] = phoneNumber.value;
	const indexOfUser = data.indexOf(userId);
	data.splice(indexOfUser, 1);
	data.push(userId);
	setUserData(data);
	location.reload();
});

profDisp.style.background = `url("https://ui-avatars.com/api/?name=${userId["name"]}&rounded=true&uppercase=false&background=random") no-repeat center center/cover`;
firstName.value = userId["first_name"];
lastName.value = userId["last_name"];
displayName.value = userId["name"];
dateOfBirth.value = userId["dob"];
emailAddress.value = userId["username"];
phoneNumber.value = userId["phone_number"];
