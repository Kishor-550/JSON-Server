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

let usernameLogin = document.getElementById("username-sign-in");
let passwordLogin = document.getElementById("password-sign-in");
let loginRole = document.getElementById("role-sign-in");
const signinForm = document.getElementById("sign-in");
const emailErr = document.getElementsByClassName("email-error")[0];
const errors = document.querySelector(".password-error");
const passVisible = document.querySelector(".pass-visible");

passVisible.addEventListener("click", () => {
	if (passVisible.classList.contains("bi-eye-fill")) {
		passVisible.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
		passwordLogin.setAttribute("type", "text");
	} else {
		passVisible.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
		passwordLogin.setAttribute("type", "password");
	}
});

usernameLogin.addEventListener("input", () => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (usernameLogin.value.match(mailformat)) {
		usernameLogin.classList.remove("invalid");
		usernameLogin.classList.add("valid");
	} else {
		usernameLogin.classList.remove("valid");
	}
});

passwordLogin.addEventListener("input", () => {
	if (passwordLogin.value == "") {
		passwordLogin.classList.add("invalid");
	} else if (
		passwordLogin.value.length < 8 ||
		passwordLogin.value.search(/[a-z]/i) < 0 ||
		passwordLogin.value.search(/[0-9]/) < 0
	) {
		passwordLogin.classList.add("invalid");
	} else if (
		passwordLogin.value.length > 8 ||
		passwordLogin.value.search(/[a-z]/i) > 0 ||
		passwordLogin.value.search(/[0-9]/) > 0
	) {
		passwordLogin.classList.remove("invalid");
		passwordLogin.classList.add("valid");
	}
});

usernameLogin.addEventListener("focusout", () => {
	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (usernameLogin.value.match(mailformat)) {
		emailErr.style.display = "none";
	} else if (
		!usernameLogin.value.match(mailformat) ||
		usernameLogin.value == ""
	) {
		usernameLogin.classList.add("invalid");
		emailErr.style.display = "inline-block";
	}
});
passwordLogin.addEventListener("focusout", () => {
	if (passwordLogin.value == "") {
		errors.innerHTML = "Password cannont be empty";
		errors.style.display = "inline-block";
	} else if (
		passwordLogin.value.length < 8 ||
		passwordLogin.value.search(/[a-z]/i) < 0 ||
		passwordLogin.value.search(/[0-9]/) < 0
	) {
		errors.innerHTML =
			"Your password must be at least 8 characters <br> Your password must contain at least one letter. <br> Your password must contain at least one digit.<br>";
		errors.style.display = "inline-block";
	} else if (
		passwordLogin.value.length > 8 ||
		passwordLogin.value.search(/[a-z]/i) > 0 ||
		passwordLogin.value.search(/[0-9]/) > 0
	) {
		errors.style.display = "none";
	}
	return true;
});

signinForm.addEventListener("submit", () => {
	event.preventDefault();
			const data = user_data;
			
			for (let i of data) {
				if (
					passwordLogin.value == i.password &&
					usernameLogin.value == i.username &&
					loginRole.value == i.role
				) {
					localStorage.setItem("isSignedIn", "true");
					localStorage.setItem("id", i.id);
					return (window.location.href = "./pages/homepage.html");
				}
			}
			return alert("Oops! Log In failed Try Again");
		
});


