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
