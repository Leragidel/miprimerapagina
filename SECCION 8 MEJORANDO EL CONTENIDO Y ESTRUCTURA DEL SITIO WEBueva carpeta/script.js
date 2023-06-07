script.js
function showAlert() {
    alert('¡ Hola, esta es una alerta desde JavaScript!');  
}
const form = document.getElementById("Myform")

function validateEmail (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.text(email)
}
function validateForm() {
    const input = document.getElementById("email")
    const inputValue = input.value

    if (!validateEmail(inputValue)) {
       alert("Por favor ingese un correo electrónico válido.")
    } else {
       alert("Correo eletrónico enviado correctamente.")
    }
}

form.addEventListener("submit", function(lala) {
    lala.preventDefault()
    validateForm();
})
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links.responsive")})
}