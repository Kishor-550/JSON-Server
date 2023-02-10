function SignedIn() {
	if (localStorage.getItem("isSignedIn") == "true") {
		return (window.location.href = "../pages/homepage.html");
	} else {
		return;
	}
}
window.onload = SignedIn();

function activeTab(evt, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab-btn");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}




function passVisible(inpid, toggler) {
	
	const passVisible = document.querySelector(toggler);
	const passKey = document.getElementById(inpid);

	if (passVisible.classList.contains("bi-eye-fill")) {
		passVisible.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
		passKey.setAttribute("type", "text");
	} else {
		passVisible.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
		passKey.setAttribute("type", "password");
	}
}

function userNameValidation(userName,userNameError){

	const usernameLogin = document.getElementById(userName);
	const userNameValue = usernameLogin.value.replace(/\s/g, "")
	const emailErr = document.querySelector(userNameError);

		const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (userNameValue.match(mailformat)) {
			emailErr.style.display = "none";
		} else if (
			!userNameValue.match(mailformat) &&
			usernameLogin == ""
		) {
			usernameLogin.classList.add("invalid");
			emailErr.style.display = "inline-block";
		}
		if (userNameValue.match(mailformat)) {
			usernameLogin.classList.remove("invalid");
			usernameLogin.classList.add("valid");
		} else {
			usernameLogin.classList.remove("valid");
		}

}

function confirmPassValidation(srcid, error, checkid) {
	const errors = document.querySelector(error);
	const confPass = document.getElementById(srcid);
	const confPassValue = confPass.value.replace(/\s/g, "");
	const passKey = document.getElementById(checkid);
	const passKeyValue = passKey.value.replace(/\s/g, "")

	if (confPassValue == "") {
		errors.innerHTML = "Confirm Password cannot be empty";
		errors.style.display = "inline-block";
		confPass.classList.add("invalid");
	} else if (confPassValue != passKeyValue) {
		errors.innerHTML = "Seems like your password doesn't match.";
		errors.style.display = "inline-block";
		confPass.classList.add("invalid");
	} else {
		errors.style.display = "none";
		confPass.classList.remove("invalid");
		confPass.classList.add("valid");
	}
}



function passValidation(elemenid, errormsg) {
	const errors = document.querySelector(errormsg);
	const passKey = document.getElementById(elemenid);
	const passKeyValue = passKey.value.replace(/\s/g, "");

	if (passKeyValue == "") {
		errors.innerHTML = "Password cannot be empty";
		errors.style.display = "inline-block";
		passKey.classList.add("invalid");
	}  
	if (
		passKeyValue.length < 8 ||
		passKeyValue.search(/[a-z]/i) < 0 ||
		passKeyValue.search(/[0-9]/) < 0
	) {
		errors.innerHTML =
			"Your password must be at least 8 characters <br> Your password must contain at least one letter. <br> Your password must contain at least one digit.<br>";
		errors.style.display = "inline-block";
		passKey.classList.add("invalid");
	} 
	if (
		passKeyValue.length > 8 ||
		passKeyValue.search(/[a-z]/i) > 0 ||
		passKeyValue.search(/[0-9]/) > 0
	) {
		errors.style.display = "none";
		passKey.classList.remove("invalid");
		passKey.classList.add("valid");
	}
	
}

const usernameLogin = document.getElementById('username-sign-in');
const passwordLogin = document.querySelector(".password");
const loginRole = document.getElementById("role-sign-in");
const signinForm = document.getElementById("sign-in");


signinForm.addEventListener("submit", () => {
	event.preventDefault();
	const data = getUserData();
	let isMatch = false;
	for (let i of data) {
		if (
			passwordLogin.value == i.password &&
			usernameLogin.value == i.username &&
			loginRole.value == i.role
		) {
			isMatch = true;
			localStorage.setItem("id", i.id);
			break
		} 
	}
	if (isMatch === true) {
		localStorage.setItem("isSignedIn", "true");
		window.location.href = "./pages/homepage.html";
	} else{

		alert("Oops! Log In failed Try Again");
	}
});

  

function registerUser() {
	const user_data = getUserData();


	const firstName = document.getElementById("firstname-sign-up");
	const lastName = document.getElementById("lastname-sign-up");
	const dob = document.getElementById("DOB-sign-up");
	const emailAdd = document.getElementById("email-sign-up");
	const pass = document.getElementById("password-sign-up");
	const role = document.getElementById("role-sign-up");
	const data = user_data;
	let dataLength;
	if (user_data === null || user_data === undefined) {
		dataLength = "0"
	}else{
		dataLength = user_data.length;
	}

	if (firstName.value == ''|| lastName.value == ''|| dob.value == ''|| emailAdd.value == ''|| pass.value == ''|| role.value == '') {
	 return	alert("All field should be filled")
	}
	if (data != undefined || data != null) {
		for (const user of data) {
			if (user["username"] == emailAdd.value && emailAdd.length == 0) {
				alert("Email address already Exsits");
				break
			};
		};
	};
	let newUser = new Object();
	newUser.id = dataLength + 1;
	newUser.first_name = firstName.value;
	newUser.last_name = lastName.value;
	newUser.name = firstName.value + " " + lastName.value;
	newUser.role = role.value;
	newUser.dob = dob.value;
	newUser.phone_number = null;
	newUser.username = emailAdd.value;
	newUser.password = pass.value;
	newUser.favourites = [];
	newUser.borrow_history = [];
	user_data.push(newUser);

	localStorage.removeItem("user_data");
	const user_json = JSON.stringify(user_data);
	localStorage.setItem("user_data", user_json);
	location.reload()
};
