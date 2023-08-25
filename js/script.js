const site__loading = document.querySelector(".site__loading")

setTimeout(() => {
  site__loading.classList.add("load__off")
}, 2500);

let load = setInterval(() => {
  if (site__loading.classList.contains("load__off")) {
    site__loading.setAttribute("style", "display: none;")
    clearInterval(load)
  }
}, 1000);


const number_input = document.querySelector("#number_input")
const login__btn = document.querySelector(".login__btn")
const login__form = document.querySelector(".login__form")

let phone = 12345

number_input.oninput = (e) =>{
  // console.log(e.target.value)
  if (e.target.value != "") {
    login__btn.disabled = false
  } else{
    login__btn.disabled = true
  }
  if (e.target.value == phone) {
    login__form.setAttribute("id", "phone__error")
  } else {
    login__form.setAttribute("id", "")
  }
}