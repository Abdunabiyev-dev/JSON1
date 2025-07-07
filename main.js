const ism = document.getElementById("name")
const yosh = document.getElementById("age")
const button = document.getElementById("btn")

function save() {
    let user = {
        name: ism.value,
        age: yosh.value
    }
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user)
    })
}
button.addEventListener("click", save);