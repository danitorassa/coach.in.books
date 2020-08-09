const form = document.querySelector("#info")
const nombre = document.querySelector("#nombre")
const nombreHelp = document.querySelector ("#nombreHelp")
const fechanac = document.querySelector("#fechanac")
const email = document.querySelector("#email")
const emailHelp = document.querySelector ("#emailHelp")
const password = document.querySelector("#password")
const passwordHelp = document.querySelector ("#passwordHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (nombre.value === "" || email.value === "" || password.value === "") {
		if (nombre.value === "") {
			nombreHelp.innerText = "Por favor completar este campo"
			}
		if (email.value === "") {
			emailHelp.innerText = "Por favor completar este campo"
			}
		if (password.value === "") {
			passwordHelp.innerText = "Por favor completar este campo"
			}
		} else {
		form.submit();
	}
	})

document.querySelectorAll('a[href^="#servicios"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
})